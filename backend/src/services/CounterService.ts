import { Collection } from 'mongodb';

import { MongoAdapter } from '../models/mongodb/MongoClient';

class CounterService {
  static getNextCounter = async (type: string): Promise<number> => {
    const counterCollection: Collection = await MongoAdapter.getCollection(
      'counters'
    );

    const counter = await counterCollection.findOneAndUpdate(
      {
        _id: {
          db: 'main',
          coll: type,
        },
      },
      {
        $inc: {
          seq_value: 1,
        },
      },
      { returnDocument: 'after', upsert: true }
    );
    return counter.value.seq_value;
  };
}

export { CounterService};
