import { MongoAdapter } from "../models/mongodb/MongoClient";
import Config from "../utils/config";

MongoAdapter.build(Config.MONGODB_URI, 'main');

class BaseController {}

export { BaseController }