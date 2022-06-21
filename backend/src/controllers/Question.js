class QuestionController {
    GetQuestionsWithExperiences = async (req, res) => {
        const questionsWithExperiences = [{
            "_id": "question-1",
            "questionText": "Tell me about a time when you salami steak",
            "experiences": [
                {
                    "_id": "exp-1",
                    "value": "I volunteered for charity"
                },
                {
                    "_id": "exp-2",
                    "value": "Summer camp tramping"
                },
            ]
        }, {
            "_id": "question-2",
            "questionText": "Tell me about a time when you experienced a conflict",
            "experiences": [
                {
                    "_id": "exp-2",
                    "value": "Summer camp tramping"
                },
                {
                    "_id": "exp-3",
                    "value": "ENGGEN 115 group project"
                },
            ]
        }
        ]

        res.send(200, questionsWithExperiences)
    }
}

export { QuestionController }
