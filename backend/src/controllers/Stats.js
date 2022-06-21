class StatsController {
    GetGraduationStats = async (req, res) => {
        const graduationData = {
            "quizAccuracy": {
                "before": 20,
                "after": 80
            },
            "numExperiences": 8,
            "numQuestionsAnswered": 16,
            "completedModules": [
                "Self Introduction",
                "Thinking of Experiences",
                "Organising Situations",
                "Mannerisms"
            ]
        }

        res.send(200, graduationData)
    }
}

export { StatsController }
