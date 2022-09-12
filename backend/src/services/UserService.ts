import { MongoAdapter } from "../models/mongodb/MongoClient";
import { IAnswer } from "../controllers/Question";
import { IModuleId, IQuizAnswer } from "../controllers/Module";

/**
 * Service that deals with the user collection
 * Most stuff happens in here because most stuff is embedded in the user collection
 */
class UserService {
  /**
   * Get the numeric id of a user from their firebase Id
   * @param uuid a user's firebase uid
   * @returns userId or null if it's a new user and there is no Id
   */
  getUserId = async (
    uuid: string,
  ): Promise<number> => {
    const userCollection = await MongoAdapter.getCollection("users");
    const user = await userCollection.findOne({
      "user.uuid": uuid,
    }, {
      projection: { "user.userId": 1 },
    });

    return user == null ? null : user["user"]["userId"];
  };

  /**
   * Creates a new user in the database
   * @param user the default user
   * @returns boolean - if insertion was acknowledged by mongodb
   */
  createUser = async (user): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");
    const newUser = await userCollection.insertOne(user);
    return newUser.acknowledged;
  };

  /**
   * Get a user
   * @param userId
   * @param projection The fields in which to project, can be experiences,
   * answers, etc...
   * @param query If we want to query something specific about the user
   */
  getUser = async (
    userId: number,
    projection: string[] = null,
    query: { [key: string]: string | number } = null,
  ) => {
    const userCollection = await MongoAdapter.getCollection("users");

    const customProjection = {
      $project: {
        _id: 0,
        user: 1,
      },
    };

    if (projection) {
      projection.forEach((field) => {
        customProjection["$project"][field] = 1;
      });
    }

    const customQuery = { "user.userId": userId, ...query };

    const user = await userCollection
      .aggregate([
        {
          $match: customQuery,
        },
        customProjection,
      ])
      .toArray();

    return user.length > 0 ? user[0] : null;
  };

  /**
   * Get the modules the user wants to skip
   * @param userId
   */
  getSkipModules = async (userId: number): Promise<IModuleId[]> => {
    const user = await this.getUser(userId);
    return user["user"]["skipModules"];
  };

  /**
   * Function used to remove an element from a user's profile
   * @param userId
   * @param arrayToPull - key: array to pull from - value: condition to pull
   */
  pullFromUser = async (
    userId: number,
    arrayToPull: { [key: string]: any },
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");

    const res = await userCollection.updateOne({
      "user.userId": userId,
    }, {
      $pull: {
        ...arrayToPull,
      },
    });

    return res.modifiedCount > 0;
  };

  /**
   * Delete an experience from a user
   * @param userId
   * @param experienceId the numeric id of the experience
   */
  deleteExperience = async (userId: number, experienceId: number) => {
    const userCollection = await MongoAdapter.getCollection("users");

    // pull both the experience and answers associated with the experience
    const pull = {
      experiences: {
        experienceId: experienceId,
      },
      answers: {
        experienceId: experienceId,
      },
    };
    return await this.pullFromUser(userId, pull);

  };

  /**
   * Get the user's self-intro
   * @param userId
   */
  getUserIntro = async (userId: number) => {
    return await this.getUser(userId, ["intro"]);
  };

  /**
   * Get a list of the user's experience ids
   * @param userId
   */
  getUserExperienceIds = async (userId: number): Promise<number[]> => {
    const userCollection = await MongoAdapter.getCollection("users");
    return await userCollection.aggregate([
      {
        $match: {
          "user.userId": userId,
        },
      },
      {
        $project: {
          experienceIds: "$experiences.experienceId",
        },
      },
    ]).toArray().then((res) => {
      if (res.length != 1) {
        throw "Found more than 1 user with the same ID";
      }
      return res[0].experienceIds;
    });
  };

  /**
   * Function used to set a specific field on a user document
   * @param userId
   * @param value Key: the field to set to - value: the value to set the field
   * to
   * @param query a custom query when looking for the user
   */
  setUser = async (
    userId: number,
    value: { [key: string]: any },
    query: { [key: string]: any } = null,
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");

    const customQuery = { "user.userId": userId, ...query };

    const update = await userCollection.updateOne(customQuery, {
      $set: {
        ...value,
      },
    });

    return update.matchedCount > 0;
  };

  /**
   * Add an object to an array of the user document
   * @param userId
   * @param value key: the field to add to - value: the value to add to the field
   * @param query a custom query when looking for the user
   */
  addToSetUser = async (
    userId: number,
    value: { [key: string]: any },
    query: { [p: string]: any } = null,
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");

    const customQuery = { "user.userId": userId, ...query };
    const update = await userCollection.updateOne(
      customQuery,
      {
        $addToSet: {
          ...value,
        },
      },
      {
        upsert: true,
      },
    );
    return update.modifiedCount > 0;
  };

  /**
   * Add or modify an experience if it already exists
   * @param userId
   * @param experienceId
   * @param newExperience
   */
  setExperience = async (
    userId: number,
    experienceId: number,
    newExperience,
  ): Promise<number> => {
    const userCollection = await MongoAdapter.getCollection("users");

    let expId: number = experienceId;
    // Find if the experience already exists
    const findExperience = await userCollection.findOne({
      "user.userId": userId,
      "experiences.name": newExperience.name,
    });
    // Add the experience to the list of experiences if it doesn't already exist
    if (findExperience === null) {
      await this.addToSetUser(userId, { experiences: { ...newExperience, experienceId } });
    } else {
      // otherwise update the labels only
      await userCollection
        .findOneAndUpdate(
          {
            "user.userId": userId,
            "experiences.name": newExperience.name,
          },
          {
            $set: {
              "experiences.$.labels": newExperience.labels,
            },
          },
        )
        .then((update) => {
          // Find the experience Id of the modified experience
          const matchingExperiences = update.value.experiences.filter((res) => {
            return res.name == newExperience.name;
          });

          if (matchingExperiences.length != 1) {
            throw `number of matching experiences found ${matchingExperiences.length}`;
          }

          expId = matchingExperiences[0]["experienceId"];
        });
    }

    return expId;
  };

  AddOrUpdateQuiz = async (userId: number, moduleId: IModuleId, quizAnswer: IQuizAnswer) => {
    const userCollection = await MongoAdapter.getCollection("users");

    const quizDoc = {
      moduleId,
      ...quizAnswer,
    };

    const existingAnswer = await userCollection.findOne({
        "user.userId": userId,
        quizzes: {
          $elemMatch: {
            moduleId,
            stage: quizAnswer.stage,
          },
        },
      },
    );

    if (existingAnswer === null) {
      return await this.addToSetUser(userId, { quizzes: quizDoc });
    } else {
      const res = await userCollection.findOneAndUpdate({
        "user.userId": userId,
        quizzes: {
          $elemMatch: {
            moduleId,
            stage: quizAnswer.stage,
          },
        },
      }, {
        $set: { "quizzes.$": quizDoc },
      });
      return !!res.ok;
    }
  };

  /**
   * Submit the answer to a given question and experience
   * @param userId
   * @param questionId
   * @param experienceId
   * @param answer
   */
  findAndUpdateAnswer = async (userId: number, questionId: number, experienceId: number, answer: IAnswer): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");

    const answerDoc = {
      questionId,
      experienceId,
      answer,
    };

    const existingAnswer = await userCollection.findOne({
        "user.userId": userId,
        answers: {
          $elemMatch: {
            questionId,
            experienceId,
          },
        },
      },
    );

    if (existingAnswer === null) {
      return await this.addToSetUser(userId, { answers: answerDoc });
    } else {
      const res = await userCollection.findOneAndUpdate({
        "user.userId": userId,
        answers: {
          $elemMatch: {
            questionId,
            experienceId,
          },
        },
      }, {
        $set: { "answers.$": answerDoc },
      });
      return !!res.ok;
    }
  };

  /**
   * Get all the users to a given questionId
   * @param userId
   * @param questionId
   */
  getAnswers = async (userId: number, questionId: number) => {
    const userCollection = await MongoAdapter.getCollection("users");

    return await userCollection.aggregate([
      {
        $match: {
          "user.userId": userId,
        },
      }, {
        $project: {
          "experiences": 1,
          "answers": {
            $filter: {
              input: "$answers",
              as: "item",
              cond: { $eq: [questionId, "$$item.questionId"] },
            },
          },
        },
      },
    ]).toArray().then((users) => {
      if (users[0]["answers"].length < 1) {
        return [];
      }
      return users[0]["answers"];
    });
  };

  getStats = async (userId: number) => {
    const userCollection = await MongoAdapter.getCollection("users");

    const res = await userCollection.aggregate([
      {
        $match: {
          "user.userId": userId,
        },
      }, {
        $project: {
          numQuestionsAnswered: {
            $size: "$answers",
          },
          numExperiences: {
            $size: "$experiences",
          },
          quizzes: 1,
        },
      },
      {
        $unwind: {
          path: "$quizzes",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$quizzes.stage",
          id: { $first: "$_id" },
          numQuestionsAnswered: { $first: "$numQuestionsAnswered" },
          numExperiences: { $first: "$numExperiences" },
          numCorrect: { $sum: "$quizzes.numCorrect" },
          numQuestion: { $sum: "$quizzes.numQuestion" },
        },
      },
      {
        $group: {
          _id: "$id",
          numQuestionsAnswered: { $first: "$numQuestionsAnswered" },
          numExperiences: { $first: "$numExperiences" },
          accuracy: {
            $push: {
              _id: "$$ROOT._id",
              accuracy: {
                $cond: {
                  if: {
                    $ne: ["$$ROOT.numQuestion", 0],
                  },
                  then: {
                    $divide: ["$$ROOT.numCorrect", "$$ROOT.numQuestion"],
                  },
                  else: 0,
                },
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]).toArray();

    return res[0];
  };
}

export { UserService };
