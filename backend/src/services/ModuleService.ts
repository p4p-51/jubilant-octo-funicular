import { Collection } from "mongodb";

import { IFeedback, IModuleId, IModuleStage } from "../controllers/Module";
import { MongoAdapter } from "../models/mongodb/MongoClient";
import { UserService } from "./UserService";

class ModuleService {
  getNextStage = async (moduleStage: IModuleStage): Promise<IModuleStage> => {
    const moduleStageCollection = await MongoAdapter.getCollection(
      "moduleStage",
    );

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
              nextStage: 0,
            },
          },
        },
      ])
      .toArray();

    if (stage.length === 0) {
      throw `Cannot find moduleStage ${JSON.stringify(moduleStage)}`;
    }

    return stage[0]["nextStage"][0]
      ? stage[0]["nextStage"][0]
      : { moduleId: "grad", stage: 1 };
  };

  getNextModule = async (module: IModuleId, skipModules: IModuleId[] = null): Promise<IModuleStage> => {
    const moduleStageCollection: Collection = await MongoAdapter.getCollection(
      "moduleStage",
    );

    let currentModuleId = module;
    let nextModule;

    do {
      const stages: number[] = await moduleStageCollection
        .aggregate([
          {
            $match: {
              moduleId: currentModuleId,
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
        ])
        .toArray()
        .then((res) => {
          return res[0]["stages"];
        });

      const lastStage: number = Math.max(...stages);

      nextModule = await this.getNextStage({ moduleId: currentModuleId, stage: lastStage });

      if (nextModule.moduleId == "grad") {
        break;
      }
      currentModuleId = nextModule.moduleId;
    } while (skipModules.includes(currentModuleId));

    return nextModule;
  };

  submitFeedback = async (
    feedback: IFeedback,
    moduleId: IModuleId,
    userId: number,
  ): Promise<IModuleStage> => {
    const feedbackCollection = await MongoAdapter.getCollection(
      "moduleFeedback",
    );
    //skip modules could be abstracted up 1 level
    const skipModules: IModuleId[] = await new UserService().getSkipModules(userId);
    const nextModule: IModuleStage = await this.getNextModule(moduleId, skipModules)

    await feedbackCollection.insertOne({ moduleId: moduleId, feedback });

    return nextModule
  };

  getModulesList = async () => {
    const moduleStageCollection = await MongoAdapter.getCollection(
      "moduleStage",
    );

    return await moduleStageCollection.aggregate([
      {
        $group: {
          _id: "$moduleId",
        },
      },
    ]).toArray().then((documents) => {
      return documents.map((document) => {
        return document["_id"].toLowerCase();
      });
    });
  };
}

export { ModuleService };
