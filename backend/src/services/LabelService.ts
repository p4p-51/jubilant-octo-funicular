import { ObjectId } from 'mongodb';

import { ILabels } from '../controllers/Label';
import { MongoAdapter } from '../models/mongodb/MongoClient';

class LabelService {
  getLabels = async () => {
    const labelCollection = await MongoAdapter.getCollection('labels');
    return await labelCollection
      .aggregate([
        {
          $lookup: {
            from: 'questions',
            localField: 'label',
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

  getLabelIds = async (labels: ILabels[]): Promise<ObjectId[]> => {
    //No longer needed as no label Object ID refs are stored
    const labelCollection = await MongoAdapter.getCollection('labels');

    const labelOIds = await labelCollection
      .aggregate([
        {
          $match: {
            label: {
              $in: labels,
            },
          },
        },
      ])
      .toArray();

    const ids: ObjectId[] = [];
    labelOIds.forEach((e) => ids.push(e._id));

    return ids;
  };
}

export { LabelService };
