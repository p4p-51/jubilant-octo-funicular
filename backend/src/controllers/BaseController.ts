import { MongoAdapter } from "../models/mongodb/MongoClient";
import Config from "../utils/config";

// Both databases are hosted on the same MongoAtlas Cluster
const dbName = Config.ENV == "PROD" ? "prod" : "main";

MongoAdapter.build(Config.MONGODB_URI, dbName);

/**
 * Base controller which all other controllers will inherit from
 * They will have access to the MongoAdapter
 */
class BaseController {
}

export { BaseController };
