class QuestionController {
    GetQuestionsWithExperiences = async (req, res) => {
        const questionsWithExperiences = [{
            "_id": "question-1",
            "questionText": "Tell me about a time when you salami steak",
            "experiences": [
                {
                    "_id": "exp-1",
                    "name": "I volunteered for charity"
                },
                {
                    "_id": "exp-2",
                    "name": "Summer camp tramping"
                },
            ]
        }, {
            "_id": "question-2",
            "questionText": "Tell me about a time when you experienced a conflict",
            "experiences": [
                {
                    "_id": "exp-2",
                    "name": "Summer camp tramping"
                },
                {
                    "_id": "exp-3",
                    "name": "ENGGEN 115 group project"
                },
            ]
        }
        ]

        res.send(200, questionsWithExperiences)
    }

    GetQuestionsWithResponses = async (req, res) => {
        const questionsWithResponses = [{
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
            ],
            "responses": [
                {
                    "experience": {
                        "_id": "exp-1",
                        "value": "I volunteered for charity"
                    },
                    "answer": {
                        "s": "Bacon ipsum dolor amet shoulder shankle landjaeger, jowl drumstick fatback boudin pork belly. Chislic filet mignon short ribs porchetta shoulder flank corned beef, fatback venison biltong ground round jerky shank.",
                        "t": "Shoulder turkey tenderloin turducken ball tip pastrami ground round, pork chop picanha leberkas biltong beef salami t-bone. Cupim hamburger ham hock pork jerky, brisket fatback t-bone capicola filet mignon salami bresaola. Cow buffalo pig, burgdoggen swine beef ribs pastrami bacon chislic short loin shankle ham hock bresaola picanha leberkas. ",
                        "a": "T-bone cow bresaola beef ribs meatloaf filet mignon meatball strip steak corned beef chislic tail capicola andouille fatback. Bacon sirloin ball tip, landjaeger burgdoggen meatball andouille.",
                        "r": "Doner hamburger biltong picanha shankle, jowl sirloin cupim sausage venison strip steak porchetta pork short ribs swine. Spare ribs chicken picanha, pastrami tail corned beef alcatra t-bone hamburger cupim chislic flank pork jerky drumstick."
                    }
                }
            ]
        },
        {
            "_id": "question-2",
            "questionText": "Tell me about a time when you chicken ground round bacon, kielbasa chuck kevin short",
            "experiences": [
                {
                    "_id": "exp-3",
                    "value": "I ate a watermelon on camera"
                },
                {
                    "_id": "exp-2",
                    "value": "Summer camp tramping"
                },
            ],
            "responses": [
                {
                    "experience": {
                        "_id": "exp-3",
                        "value": "I ate a watermelon on camera"
                    },
                    "answer": {
                        "s": "Brisket sausage burgdoggen tongue bacon, beef buffalo pastrami frankfurter. Pork chop bacon flank kielbasa ham hock landjaeger, shankle ground round filet mignon pig pork loin porchetta hamburger.",
                        "t": "Kevin pork chop short ribs tongue pork loin ham rump doner porchetta meatball corned beef boudin turkey pancetta. Flank alcatra pastrami cupim t-bone fatback. Shankle beef ribs ball tip landjaeger flank pork chop. Chuck filet mignon frankfurter chislic spare ribs capicola.",
                        "a": "Beef ribs venison drumstick cow capicola pork belly chuck jerky. Beef biltong tri-tip rump, alcatra meatball kielbasa strip steak chislic ball tip ribeye pancetta pastrami shoulder bresaola. Doner pork venison andouille. ",
                        "r": "Ham hock brisket ground round beef filet mignon, sirloin venison meatball cupim. Tri-tip chicken porchetta pancetta t-bone frankfurter tongue shoulder ham. Strip steak chicken prosciutto kielbasa rump, meatloaf leberkas tenderloin ham hock picanha chuck drumstick salami."
                    }
                }
            ]
        }
        ]

        res.send(200, questionsWithResponses)
    }

    Answer = async (req, res) => {
        res.status(200)
    }
}

export { QuestionController }
