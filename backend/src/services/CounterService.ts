import { Collection } from "mongodb";

import { MongoAdapter } from "../models/mongodb/MongoClient";

/**
 * Service class that deals with the counter collection
 */
class CounterService {
  /**
   *  Get the next number for the counter sequence, this functions similar to
   *  an SQL auto increment counter
   * @param type the counter to get, usually 'user' or 'experience'
   * @return The next valid counter number
   */
  static getNextCounter = async (type: string): Promise<number> => {
    const counterCollection: Collection = await MongoAdapter.getCollection(
      "counters",
    );

    const counter = await counterCollection.findOneAndUpdate(
      {
        _id: {
          db: "main",
          coll: type,
        },
      },
      {
        $inc: {
          seq_value: 1,
        },
      },
      { returnDocument: "after", upsert: true },
    );
    return counter.value.seq_value;
  };
}

export { CounterService };
