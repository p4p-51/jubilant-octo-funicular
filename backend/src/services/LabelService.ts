import { IFullLabel, ILabels } from "../controllers/Label";
import { MongoAdapter } from "../models/mongodb/MongoClient";

/**
 * Class that deals with the labels collection
 */
class LabelService {
  /**
   * Get all the available label an experience can be tagged as and related
   * questions
   * @returns An array of labels and their questions
   */
  getLabels = async (): Promise<IFullLabel[]> => {
    const labelCollection = await MongoAdapter.getCollection("labels");
    return await labelCollection
      .aggregate<IFullLabel>([
        {
          $lookup: {
            from: "questions",
            localField: "label",
            foreignField: "labelId",
            as: "questions",
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
