import { MongoAdapter } from '../models/mongodb/MongoClient'
import { BaseController } from "../controllers/BaseController";


class UserService extends BaseController{

  getUser = async () => {
    const userCollection = await MongoAdapter.getInstance().getCollection('users')
    userCollection.insertOne({ name: "dan" })
  }
}
export { UserService }