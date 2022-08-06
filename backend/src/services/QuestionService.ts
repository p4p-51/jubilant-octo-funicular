import { MongoAdapter } from "../models/mongodb/MongoClient";

class QuestionService {
  getQuestionIds = async (): Promise<number[]> => {
    const questionCollection = await MongoAdapter.getCollection("questions");
    return await questionCollection.distinct("questionId")
  }
  getAllQuestionWithExperiences = async (userId: number) => {
    const questionCollection = await MongoAdapter.getCollection("questions");

    return await questionCollection.aggregate([
      {
        $lookup: {
          from: "users",
          let: { labelId: "$labelId" },
          pipeline: [
            {
              $match: {
                "userId": userId,
              },
            },
            {
              $project: {
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
      }, {
        $project: {
          _id: 0,
          questionText: 1,
          questionId: 1,
          labelId: 1,
          experiences: { $first: "$user.filteredExp" },
        },
      },
    ]).toArray();
  };
}

export { QuestionService };