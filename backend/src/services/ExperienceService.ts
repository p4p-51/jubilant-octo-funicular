import { Collection } from 'mongodb';

import { MongoAdapter } from '../models/mongodb/MongoClient';

class ExperienceService {
  getNextExperienceId = async (): Promise<number> => {
    const counterCollection: Collection = await MongoAdapter.getCollection(
      'counters'
    );

    const counter = await counterCollection.findOneAndUpdate(
      {
        _id: {
          db: 'main',
          coll: 'experience',
        },
      },
      {
        $inc: {
          experience_seq_value: 1,
        },
      },
      { returnDocument: 'after', upsert: true }
    );
    return counter.value.experience_seq_value;
  };
}

export { ExperienceService };
