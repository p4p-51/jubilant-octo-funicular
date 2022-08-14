import { MongoAdapter } from '../models/mongodb/MongoClient';
import Config from '../utils/config';

const dbName = Config.ENV == "PROD" ? "prod" : "main"

MongoAdapter.build(Config.MONGODB_URI, dbName);

class BaseController {}

export { BaseController };
