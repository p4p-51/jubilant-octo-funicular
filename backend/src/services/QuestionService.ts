import { MongoAdapter } from "../models/mongodb/MongoClient";

/**
 * Service that deals with the questions collection
 */
class QuestionService {
  /**
   * Get all the question Ids
   */
  getQuestionIds = async (): Promise<number[]> => {
    const questionCollection = await MongoAdapter.getCollection("questions");
    return await questionCollection.distinct("questionId");
  };

  /**
   * Get all the questions with the relavent experiences along with the number
   * of answers for each question
   * @param userId
   */
  getAllQuestionWithExperiences = async (userId: number) => {
    const questionCollection = await MongoAdapter.getCollection("questions");

    return await questionCollection.aggregate([
      {
        $lookup: {
          from: "users",
          let: { labelId: "$labelId", questionId: "$questionId" },
          pipeline: [
            {
              $match: {
                "user.userId": userId,
              },
            },
            {
              $project: {
                // Getting the number of answers for each question
                "answerCount": {
                  $size: {
                    $filter: {
                      input: "$answers",
                      as: "item",
                      cond: { $eq: ["$$item.questionId", "$$questionId"] },
                    },
                  },
                },
                // Getting the relevant experiences
                "filteredExp": {
                  $filter: {
                    input: "$experiences",
                    as: "item",
                    cond: { $in: ["$$labelId", "$$item.labels"] },
                  },
                },
              },
            },
          ],
          as: "user",
        },
      },
      {
        $project: {
          _id: 0,
        },
        $addFields: {
          experiences: {
            $ifNull: [{ $first: "$user.filteredExp" }, []],
          },
          answerCount: {
            $ifNull: [{ $first: "$user.answerCount" }, 0],
          },
        },
      },
    ]).toArray();
  };
}

export { QuestionService };