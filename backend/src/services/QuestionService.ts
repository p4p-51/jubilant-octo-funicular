import { MongoAdapter } from "../models/mongodb/MongoClient";

class QuestionService {
  getAllQuestionWithExperiences = async (userId: number) => {
    const questionCollection = await MongoAdapter.getCollection("questions");

    const rest = await questionCollection.aggregate([
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
      },
      {
        $project: {
          _id: 0,
          questionText: 1,
          questionId: 1,
          labelId: 1,
          experiences: { $first: "$user.filteredExp"}
        }
      }
    ]).toArray();

    console.log(rest);
  };
}

export { QuestionService };