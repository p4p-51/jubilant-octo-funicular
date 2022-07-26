import { Db, MongoClient } from 'mongodb';
import { logger } from '../../utils/logger';

/**
 * A singleton adapter that allows access to MongoDB cluster through a unique mongo uri.
 */
class MongoAdapter {
  /**
   * The database instance.
   */
  db = null;

  /**
   * Private MongoClient for purposes of getting another database from the same adapter instance.
   */
  client = null;

  _isConnected = false;

  static _instance = null;

  constructor(uri, dbName) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    client.connect((err) => {
      if (err) throw err;
      this.db = client.db(dbName);
      this._isConnected = true;
      logger.logInfo('MongoDB connected');
    });

    this.client = client;
  }

  getDb(dbName) {
    return this.client.db(dbName);
  }

  /**
   * Builds a MongoAdapter using a `uri` and default `dbName`.
   */
  static build(uri, dbName) {
    if (this._instance) throw new Error('MongoAdapter already built!');

    this._instance = new this(uri, dbName);
    return this._instance;
  }

  /**
   * Get the current `MongoAdapter` instance if it exists, or
   */
  static getInstance() {
    if (!this._instance) throw new Error('No instance of MongoAdapter exists!');
    return this._instance;
  }

  async getCollection(collectionName) {
    await this._isDBConnected();
    return this.db.collection(collectionName);
  }

  async _isDBConnected(){
    let counter = 0;
    while (!this._isConnected) {
      if (counter === 20) {
        throw new Error("Connection to MongoDB Timed Out")
      }
      await new Promise(resolve => setTimeout(resolve, 100));
      counter++;
    }

    return true;
  }
}

export { MongoAdapter };
