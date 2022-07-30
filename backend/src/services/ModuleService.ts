import { components } from '../interfaces/api';
import { MongoAdapter } from '../models/mongodb/MongoClient';
type IModuleStage = components['schemas']['ModuleStage'];

class ModuleService {
  getNextStage = async (moduleStage: IModuleStage): Promise<IModuleStage> => {
    const moduleStageCollection =
      await MongoAdapter.getInstance().getCollection('moduleStage');

    const stage = await moduleStageCollection
      .aggregate([
        {
          $match: { module: moduleStage.module, stage: moduleStage.stage },
        },
        {
          $lookup: {
            from: 'moduleStage',
            localField: 'nextStage',
            foreignField: '_id',
            as: 'nextStage',
          },
        },
      ])
      .toArray();

    if (stage.length === 0) {
      throw `Cannot find moduleStage ${JSON.stringify(moduleStage)}`;
    }

    return stage[0]['nextStage']
      ? stage[0]['nextStage']
      : { module: 'grad', stage: 1 };
  };
}

export { ModuleService };
