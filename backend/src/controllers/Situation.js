class SituationController {
    GetAllSituations = async (req, res) => {
        const situations = [{
            "situationId": "situation-1",
            "name": "ENGGEN 115 Group Project",
            "labels": [
                {
                    "labelId": "label-1",
                    "labelString": "I experienced a conflict",
                    "questions":
                        [
                            {
                                "questionId": "question-1",
                                "questionText": "Tell me about a time when you experienced a conflict",
                                "answer": {
                                    "s": "Bacon ipsum dolor amet shoulder shankle landjaeger, jowl drumstick fatback boudin pork belly. Chislic filet mignon short ribs porchetta shoulder flank corned beef, fatback venison biltong ground round jerky shank.",
                                    "t": "Shoulder turkey tenderloin turducken ball tip pastrami ground round, pork chop picanha leberkas biltong beef salami t-bone. Cupim hamburger ham hock pork jerky, brisket fatback t-bone capicola filet mignon salami bresaola. Cow buffalo pig, burgdoggen swine beef ribs pastrami bacon chislic short loin shankle ham hock bresaola picanha leberkas. ",
                                    "a": "T-bone cow bresaola beef ribs meatloaf filet mignon meatball strip steak corned beef chislic tail capicola andouille fatback. Bacon sirloin ball tip, landjaeger burgdoggen meatball andouille.",
                                    "r": "Doner hamburger biltong picanha shankle, jowl sirloin cupim sausage venison strip steak porchetta pork short ribs swine. Spare ribs chicken picanha, pastrami tail corned beef alcatra t-bone hamburger cupim chislic flank pork jerky drumstick."
                                }
                            },
                            {
                                "questionId": "question-2",
                                "questionText": "Tell me about a time when you disagreed with a superior",
                            }
                        ]
                },
                {
                    "labelId": "label-2",
                    "labelString": "I demonstrated leadership",
                    "questions":
                        [
                            {
                                "questionId": "question-2",
                                "questionText": "Tell me about a time when you demonstrated leadership",
                                "answer": {
                                    "s": "Brisket sausage burgdoggen tongue bacon, beef buffalo pastrami frankfurter. Pork chop bacon flank kielbasa ham hock landjaeger, shankle ground round filet mignon pig pork loin porchetta hamburger.",
                                    "t": "Kevin pork chop short ribs tongue pork loin ham rump doner porchetta meatball corned beef boudin turkey pancetta. Flank alcatra pastrami cupim t-bone fatback. Shankle beef ribs ball tip landjaeger flank pork chop. Chuck filet mignon frankfurter chislic spare ribs capicola.",
                                    "a": "Beef ribs venison drumstick cow capicola pork belly chuck jerky. Beef biltong tri-tip rump, alcatra meatball kielbasa strip steak chislic ball tip ribeye pancetta pastrami shoulder bresaola. Doner pork venison andouille. ",
                                    "r": "Ham hock brisket ground round beef filet mignon, sirloin venison meatball cupim. Tri-tip chicken porchetta pancetta t-bone frankfurter tongue shoulder ham. Strip steak chicken prosciutto kielbasa rump, meatloaf leberkas tenderloin ham hock picanha chuck drumstick salami."
                                }
                            }
                        ]
                },
            ]
        },
        {
            "situationId": "situation-2",
            "name": "Summer Camp at Teapot Valley",
            "labels": [
                {
                    "labelId": "label-3",
                    "labelString": "I experienced a failure",
                    "questions":
                        [
                            {
                                "questionId": "question-3",
                                "questionText": "Tell me about a time when you experienced a setback or failure",
                            }
                        ]
                },
                {
                    "labelId": "label-1",
                    "labelString": "I experienced a conflict",
                    "questions":
                        [
                            {
                                "questionId": "question-1",
                                "questionText": "Tell me about a time when you experienced a conflict",
                                "answer": {
                                    "s": "Cow frankfurter turkey, pork shank ball tip prosciutto kielbasa kevin boudin drumstick meatball doner meatloaf alcatra. Pancetta pig shankle ball tip bresaola swine. Capicola pancetta fatback pastrami jerky frankfurter. ",
                                    "t": "Shoulder capicola boudin, alcatra pork belly biltong salami ball tip tail pork loin beef ribs shankle venison.",
                                    "a": "Jerky strip steak ground round brisket, venison tri-tip kevin chislic flank turkey biltong filet mignon fatback swine. Pork biltong bresaola turducken turkey drumstick pancetta beef salami filet mignon flank brisket.",
                                    "r": "Kevin pork chop short ribs tongue pork loin ham rump doner porchetta meatball corned beef boudin turkey pancetta. Flank alcatra pastrami cupim t-bone fatback. Shankle beef ribs ball tip landjaeger flank pork chop. Chuck filet mignon frankfurter chislic spare ribs capicola."
                                }
                            },
                            {
                                "questionId": "question-2",
                                "questionText": "Tell me about a time when you disagreed with a superior",
                            }
                        ]
                }
            ]
        }]
        res.send(200, situations)
    }
}

export { SituationController }
