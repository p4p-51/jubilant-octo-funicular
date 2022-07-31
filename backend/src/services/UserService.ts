import { MongoAdapter } from "../models/mongodb/MongoClient";

class UserService {
  getUser = async (userId: number) => {
    const userCollection = await MongoAdapter.getCollection(
      "users",
    );
    return userCollection.findOne(
      { userId: userId },
      { projection: { _id: 0 } },
    );
  };

  getUserIntro = async (userId: number) => {
    const userCollection = await MongoAdapter.getCollection(
      "users",
    );
    return userCollection.findOne(
      { userId: userId },
      { projection: { _id: 0, intro: 1 } },
    );
  };

  setUser = async (
    userId: number,
    setKey,
    setBody,
  ): Promise<boolean> => {
    const userCollection = await MongoAdapter.getCollection(
      "users",
    );

    const update = await userCollection.updateOne(
      { userId: userId },
      {
        $set: {
          [setKey]: setBody,
        },
      },
    );

    return update.modifiedCount > 0;
  };

  pushUser = async (userId: number, pushKey, pushBody): Promise<Boolean> => {
    const userCollection = await MongoAdapter.getCollection(
      "users",
    );

    const update = await userCollection.updateOne(
      { userId: userId },
      {
        $push: {
          [pushKey]: pushBody,
        },
      },
    );

    return update.modifiedCount > 0;
  };
}

export { UserService };
