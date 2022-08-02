import { IExperience } from '../controllers/Experience';
import { MongoAdapter } from '../models/mongodb/MongoClient';

class UserService {
  getUser = async (
    userId: number,
    projection: string[] = null,
    query: { [key: string]: string | number } = null
  ) => {
    const userCollection = await MongoAdapter.getCollection('users');

    const customProjection = {
      $project: {
        _id: 0,
        userName: 1,
        userId: 1,
      },
    };

    if (projection) {
      projection.forEach((field) => {
        customProjection['$project'][field] = 1;
      });
    }

    const customQuery = { userId, ...query };

    const user = await userCollection
      .aggregate([
        {
          $match: customQuery,
        },
        {
          $unwind: {
            path: '$experiences',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: 'labels',
            localField: 'experiences.labels',
            foreignField: '_id',
            as: 'experiences.labels',
          },
        },
        {
          $addFields: {
            'experiences.labels': '$experiences.labels.label',
          },
        },
        {
          $group: {
            _id: '$_id',
            userName: { $first: '$userName' },
            progress: { $first: '$progress' },
            userId: { $first: '$userId' },
            intro: { $first: '$intro' },
            quizzes: { $first: '$quizzes' },
            experiences: { $push: '$experiences' },
          },
        },
        customProjection,
      ])
      .toArray();

    return user.length > 0 ? user[0] : null;
  };

  getUserIntro = async (userId: number) => {
    return await this.getUser(userId, ['intro']);
  };

  setUser = async (
    userId: number,
    value: { [key: string]: any },
    query: { [key: string]: any } = null
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection('users');

    const customQuery = { userId, ...query };

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
    query: { [p: string]: any } = null
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection('users');

    const customQuery = { userId, ...query };
    const update = await userCollection.updateOne(
      customQuery,
      {
        $addToSet: {
          ...value,
        },
      },
      {
        upsert: true,
      }
    );
    return update.modifiedCount > 0;
  };

  setExperience = async (
    userId: number,
    experienceId: number,
    newExperience
  ): Promise<number> => {
    const userCollection = await MongoAdapter.getCollection('users');

    let expId: number = experienceId;
    // Find if the experience already exists
    const findExperience = await userCollection.findOne({
      userId: userId,
      'experiences.name': newExperience.name,
    });
    // Add the experience to the list of experiences if it doesn't already exist
    if (findExperience === null) {
      await this.addToSetUser(userId, { experiences: newExperience });
    } else {
      // otherwise update the labels only
      await userCollection
        .findOneAndUpdate(
          {
            userId: userId,
            'experiences.name': newExperience.name,
          },
          {
            $set: {
              'experiences.$.labels': newExperience.labels,
            },
          }
        )
        .then((update) => {
          // Find the experience Id of the modified experience
          const matchingExperiences = update.value.experiences.filter((res) => {
            return res.name == newExperience.name;
          });

          if (matchingExperiences.length != 1) {
            throw `number of matching experiences found ${matchingExperiences.length}`;
          }

          expId = matchingExperiences[0]['experienceId'];
        });
    }

    return expId;
  };
}

export { UserService };
