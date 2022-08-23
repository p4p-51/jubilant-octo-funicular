import QuestionForQuiz from "@/types/QuizQuestion.interface";

const routesManager = {
  "lecture": {
    "self-intro": {
      route: "self-intro",
      stages: [
        {
          "route": "quiz/prelim",
          "content": [
            {
              title: "Self-intro 1",
              options: [
                {
                  id: "1",
                  text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
                  isCorrect: true,
                  explanation:
                    "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "2",
                  text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "3",
                  text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "4",
                  text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
              ],
              answer: "1",
            },
            {
              title: "What is the best way to learn Vue?",
              options: [
                {
                  id: "1",
                  text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
                  isCorrect: true,
                  explanation:
                    "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "2",
                  text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "3",
                  text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "4",
                  text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
              ],
              answer: "3",
            },
            {
              title: "What is the best way to learn Vue?",
              options: [
                {
                  id: "1",
                  text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
                  isCorrect: true,
                  explanation:
                    "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "2",
                  text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "3",
                  text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
                {
                  id: "4",
                  text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
                  isCorrect: false,
                  explanation:
                    "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
                },
              ],
              answer: "4",
            },
          ] as QuestionForQuiz[],
        },
        {
          "route": "information",
          "content": {},
        },
        {
          "route": "diy",
          "content": {},
        },
        {
          "route": "quiz/end",
          "content": {},
        },
        {
          "route": "feedback",
        },
      ],
    },
    "experiences": {
      route: "experiences",
      stages: [
        {
          "route": "quiz/prelim",
          "content": {},
        },
        {
          "route": "information",
          "content": {},
        },
        {
          "route": "build-profile",
          "content": {},
        },
        {
          "route": "quiz/end",
          "content": {},
        },
        {
          "route": "feedback",
        },
      ],
    },
    "responses": {
      route: "responses",
      stages: [
        {
          "route": "quiz/prelim",
          "content": {},
        },
        {
          "route": "information",
          "content": {},
        },
        {
          "route": "add-answer",
          "content": {},
        },
        {
          "route": "quiz/end",
          "content": {},
        },
        {
          "route": "feedback",
        },
      ],
    },
    "mannerism": {
      route: "mannerism",
      stages: [
        {
          "route": "quiz/prelim",
          "content": {},
        },
        {
          "route": "information",
          "content": {},
        },
        {
          "route": "quiz/end",
          "content": {},
        },
        {
          "route": "feedback",
        },
      ],
    },
  },
};

export type IModuleId = keyof typeof routesManager["lecture"]

class UsefulRoutes {
  static fullRoute = (moduleId: IModuleId, stage: number) => {
    const base = routesManager["lecture"][moduleId];
    return `${base["route"]}/${base["stages"][stage - 1]["route"]}`;
  };

  static selfIntroDiyRoute = () => {
    return UsefulRoutes.fullRoute("self-intro", 3);
  };

  static buildProfileRoute = () => {
    return UsefulRoutes.fullRoute("experiences", 3);
  };

  static addAnswerRoute() {
    return UsefulRoutes.fullRoute("responses", 3);
  }
}

class DataExtractor {
  static getQuizQuestions = (moduleId: IModuleId, type: string): QuestionForQuiz => {
    const data = routesManager["lecture"][moduleId]["stages"];

    const stage = data.find((stage) => {
      return stage.route = `quiz/${type}`;
    });

    return stage!["content"] as QuestionForQuiz;
  };
}

export { routesManager, UsefulRoutes, DataExtractor };