import { MongoAdapter } from "../models/mongodb/MongoClient";
import { IFeedback, IModuleId, IModuleStage } from "../controllers/Module";
import { Collection } from "mongodb";

class ModuleService {
  getNextStage = async (moduleStage: IModuleStage): Promise<IModuleStage> => {
    const moduleStageCollection =
      await MongoAdapter.getCollection("moduleStage");

    const stage = await moduleStageCollection
      .aggregate([
        {
          $match: { moduleId: moduleStage.moduleId, stage: moduleStage.stage },
        },
        {
          $lookup: {
            from: "moduleStage",
            localField: "nextStage",
            foreignField: "_id",
            as: "nextStage",
          },
        },
        {
          $project: {
            _id: 0,
            nextStage: {
              _id: 0,
              nextStage: 0
            }
          }
        }
      ])
      .toArray();

    if (stage.length === 0) {
      throw `Cannot find moduleStage ${JSON.stringify(moduleStage)}`;
    }

    return stage[0]["nextStage"][0]
      ? stage[0]["nextStage"][0]
      : { module: "grad", stage: 1 };
  };

  getNextModule = async (module: IModuleId): Promise<IModuleStage> => {
    const moduleStageCollection: Collection = await MongoAdapter.getCollection("moduleStage");

    const stages: number[] = await moduleStageCollection.aggregate([
      {
        $match: {
          moduleId: module,
        },
      },
      {
        $group: {
          _id: "$moduleId",
          stages: {
            $push: "$stage",
          },
        },
      },
    ]).toArray().then((res) => {
      return res[0]['stages'];
    });

    const lastStage: number = Math.max(...stages)

    return await this.getNextStage({ moduleId: module, stage: lastStage });
  };

  submitFeedback = async (feedback: IFeedback, moduleId: IModuleId): Promise<IModuleStage> => {
    const feedbackCollection = await MongoAdapter.getCollection("moduleFeedback")
    await feedbackCollection.insertOne({moduleId: moduleId, feedback})

    return await this.getNextModule(moduleId);
  };
}

export { ModuleService };
