import { Collection } from "mongodb";

import { IFeedback, IModuleId, IModuleStage } from "../controllers/Module";
import { MongoAdapter } from "../models/mongodb/MongoClient";
import { UserService } from "./UserService";
import { logger } from "../utils/logger";

/**
 * Service that deals with the modules (feedback and stages) collection
 */
class ModuleService {
  /**
   * Get the next stage of a given module/stage
   * @param currentModuleStage the module/stage just completed
   * @returns the next moduleStage or grad if there is no next stage
   */
  getNextStage = async (currentModuleStage: IModuleStage): Promise<IModuleStage> => {
    const moduleStageCollection = await MongoAdapter.getCollection(
      "moduleStage",
    );

    const stage = await moduleStageCollection
      .aggregate([
        {
          $match: { moduleId: currentModuleStage.moduleId, stage: currentModuleStage.stage },
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
      logger.logError(`Cannot find the moduleStage ${currentModuleStage}`);
      throw `Cannot find moduleStage ${JSON.stringify(currentModuleStage)}`;
    }

    return stage[0]["nextStage"][0]
      ? stage[0]["nextStage"][0]
      : { moduleId: "grad", stage: 1 };
  };

  /**
   * Get the next module, ignoring the stage number
   * @param module the current module
   * @param skipModules an array of module to skip
   * @returns the next ModuleStage (stage will be at 1)
   */
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
      //Skip to next module if the found module is part of the skipped list
    } while (skipModules.includes(currentModuleId));

    return nextModule;
  };

  /**
   * Submit end of module feedback for data collection
   * @param feedback the feedback (contains text and rating out of 5)
   * @param moduleId the module it related to
   * @param userId userid (current not used to log feedback)
   */
  submitFeedback = async (
    feedback: IFeedback,
    moduleId: IModuleId,
    userId: number,
  ): Promise<IModuleStage> => {
    const feedbackCollection = await MongoAdapter.getCollection(
      "moduleFeedback",
    );
    //skip modules could be abstracted up 1 level in the controller...
    // const skipModules: IModuleId[] = await new UserService().getSkipModules(userId);
    const nextModule: IModuleStage = await this.getNextModule(moduleId);

    await feedbackCollection.insertOne({ moduleId: moduleId, feedback });

    return nextModule;
  };

  /**
   * Get the lost of available modules
   */
  getModulesList = async (): Promise<IModuleId[]> => {
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
