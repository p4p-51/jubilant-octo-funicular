import { Collection, Db, MongoClient } from "mongodb";
import { logger } from '../../utils/logger';

/**
 * A singleton adapter that allows access to MongoDB cluster through a unique mongo uri.
 */
class MongoAdapter {
  /**
   * The database instance.
   */
  db: Db = null;

  /**
   * Private MongoClient for purposes of getting another database from the same adapter instance.
   */
  client: MongoClient = null;

  _isConnected: boolean = false;

  static _instance: MongoAdapter = null;

  constructor(uri: string, dbName: string) {
    // @ts-ignore
    const client: MongoClient = new MongoClient(uri, {
    });

    client.connect((err) => {
      if (err) throw err;
      this.db = client.db(dbName);
      this._isConnected = true;
      logger.logInfo('MongoDB connected');
    });

    this.client = client;
  }

  getDb(dbName: string): Db {
    return this.client.db(dbName);
  }

  /**
   * Builds a MongoAdapter using a `uri` and default `dbName`.
   */
  static build(uri: string, dbName:string): MongoAdapter {
    if (this._instance) throw new Error('MongoAdapter already built!');

    this._instance = new this(uri, dbName);
    return this._instance;
  }

  /**
   * Get the current `MongoAdapter` instance if it exists, or
   */
  static getInstance(): MongoAdapter {
    if (!this._instance) throw new Error('No instance of MongoAdapter exists!');
    return this._instance;
  }

  async getCollection(collectionName:string): Promise<Collection> {
    await this._isDBConnected();
    return this.db.collection('users')
  }

  async _isDBConnected(): Promise<boolean> {
    let counter = 0;
    while (!this._isConnected) {
      if (counter === 20) {
        throw new Error('Connection to MongoDB Timed Out');
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      counter++;
    }

    return true;
  }
}

export { MongoAdapter };
