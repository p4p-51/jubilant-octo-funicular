import { MongoAdapter } from "../models/mongodb/MongoClient";

class UserService {
  getUser = async (userId: number) => {
    const userCollection = await MongoAdapter.getInstance().getCollection(
      "users",
    );
    return userCollection.findOne({ userId: userId }, { projection: { _id: 0 } });
  };

  getUserIntro = async (userId: number) => {
    const userCollection = await MongoAdapter.getInstance().getCollection(
      "users",
    );
    return userCollection.findOne({ userId: userId }, { projection: { _id: 0, intro: 1 } });
  };

  updateUser = async (userId: number, updateKey, updateBody): Promise<boolean> => {
    const userCollection = await MongoAdapter.getInstance().getCollection(
      "users",
    );

    const update = await userCollection.updateOne({ userId: userId }, {
      $set: {
        [updateKey]: updateBody
      },
    });

    return update.modifiedCount > 0;
  };
}

export { UserService };
