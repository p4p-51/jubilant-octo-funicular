import { MongoAdapter } from '../models/mongodb/MongoClient';

class LabelService {
  getLabels = async () => {
    const labelCollection = await MongoAdapter.getInstance().getCollection(
      'labels'
    );
    return await labelCollection
      .aggregate([
        {
          $lookup: {
            from: 'questions',
            localField: '_id',
            foreignField: 'labelId',
            as: 'questions',
          },
        },
        {
          $project: {
            _id: 0,
            questions: {
              _id: 0,
              labelId: 0,
            },
          },
        },
      ])
      .toArray();
  };
}

export { LabelService };
