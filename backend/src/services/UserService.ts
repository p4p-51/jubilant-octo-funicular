import { MongoAdapter } from "../models/mongodb/MongoClient";
import { BaseController } from "../controllers/BaseController";

class UserService extends BaseController {
  getUser = async (userId: number) => {
    const userCollection = await MongoAdapter.getInstance().getCollection(
      "users",
    );
    return await userCollection.findOne({userId: userId})
  };
}

export { UserService };
