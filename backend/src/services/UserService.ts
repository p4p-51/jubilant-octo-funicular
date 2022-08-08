import { MongoAdapter } from "../models/mongodb/MongoClient";
import { IAnswer } from "../controllers/Question";

class UserService {
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

  createUser = async (user): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection("users");

    const newUser = await userCollection.insertOne(user);

    return newUser.acknowledged;
  };

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

  getUserIntro = async (userId: number) => {
    return await this.getUser(userId, ["intro"]);
  };

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

    return update.modifiedCount > 0;
  };

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
    })
  };
}

export { UserService };
