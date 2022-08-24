import QuestionForQuiz from "@/types/QuizQuestion.interface";
import { trackProgress } from "@/apis/api";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { routeStore } from "@/router/route.store";

const routeData = {
  lecture: {
    "self-intro": {
      route: "self-intro",
      name: "Self Introduction",
      stages: [
        {
          route: "quiz/prelim",
          name: "Preliminary Quiz",
          content: [
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
          route: "content",
          name: "Lecture",
          content: [
            {
              type: "TitleBlock",
              props: {
                title: "What makes a good self introduction?",
                subtitle: "How to introduce yourself in a hurry",
                module: "Self introduction",
                body:
                  "The aim of this module is for you to understand how the answer the age old\n" +
                  "      question - “Tell me about yourself”. While not explicitly a behavioural\n" +
                  "      interview questions, it’ll almost certainly be the first question you’re\n" +
                  "      asked during an interview.\n" +
                  "      <br />\n" +
                  "      First, we must understand what is a elevator pitch elements of a ‘good’\n" +
                  "      answer and how it can be structured to impress your interviewer.\n" +
                  "      <br />\n" +
                  "      By this end of this module, you’ll have understood the structure of how to\n" +
                  "      answer, gone through a couple of examples and multiple choice questions,\n" +
                  "      and lastly, written your own compelling self introduction.",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "What is an elevator pitch?",
                body:
                  " It's a short, memorable description of what you do, your experiences, and\n" +
                  "      … The goal is for the recruiter to understand you and your background\n" +
                  "      beyond your CV. Recruiters may also use your answer as a segway for follow\n" +
                  "      up questions, diving deepering into your history and what makes you tick.",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "What should I include?",
                body:
                  "It is recommended that your answer includes the following, introduction,\n" +
                  "      your past, present, and future, while coviering a range of topics\n" +
                  "      including relevant job experiences, hobbies, passion etc. <br /><br />Your\n" +
                  "      introduction should include your name, education and the role you’re\n" +
                  "      applying for. This is just to make sure that you’re speaking to the right\n" +
                  "      person for the right role. <br /><br />“The past” section is for you to\n" +
                  "      tell them how you got to were you are now. Here you could mention any\n" +
                  "      previous job or internship experiences and/or why you decided to study\n" +
                  "      your chosen degree.<br /><br />“The present” should focus on where you are\n" +
                  "      now, are you currently studying or working, what are your hobbies and\n" +
                  "      interests are outside of study or work, or perhaps a recent\n" +
                  "      accomplishment. <br /><br />“The future” is about your goals and\n" +
                  "      aspirations. How does the job help you reach that goal? <br /><br />This\n" +
                  "      isn’t the only way to build your response, of course, and you can tweak it\n" +
                  "      as you see fit. If there’s a particularly potent story about what brought\n" +
                  "      you into this field, for example, you might decide to start with that\n" +
                  "      “past” story and then get into what you’re doing in the present.<br /><br />Whatever\n" +
                  "      order you pick, make sure you ultimately tie it to the job and company.\n" +
                  "      You want to be absolutely certain your interviewer is left with the\n" +
                  "      impression that it “makes sense that [you’re] sitting here talking to me\n" +
                  "      about this role.”<br /><br />Aim for it to be between a minute or two, any\n" +
                  "      longer and the recruit will begin to lose interest. <br /><br />You should\n" +
                  "      practice your introduction but you don’t want to memeorise it word for\n" +
                  "      work. Otherwise it’ll come off robotic and unnatural. Keep memorisation to\n" +
                  "      the key points if necessary. <br />\n" +
                  "      <br />\n" +
                  "      Additional resources.<br />\n" +
                  "      <a\n" +
                  "        href=\"https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself\"\n" +
                  "      >https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself </a\n" +
                  "      ><br />\n" +
                  "      <a\n" +
                  "        href=\"https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples\"\n" +
                  "      >https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples</a\n" +
                  "      ><br />\n" +
                  "      <a\n" +
                  "        href=\"https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself\"\n" +
                  "      >\n" +
                  "        https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself </a\n" +
                  "      ><br />",
              },
            },
          ],
        },
        {
          route: "diy",
          name: "Your own Intro!",
          content: {},
        },
        {
          route: "quiz/end",
          name: "Review Quiz",
          content: {},
        },
        {
          route: "feedback",
          name: "Feedback",
        },
      ],
    },
    experiences: {
      route: "experiences",
      name: "Organising Past Experiences",
      stages: [
        {
          route: "quiz/prelim",
          name: "Preliminary Quiz",
          content: {},
        },
        {
          route: "content",
          name: "Lecture",
          content: {},
        },
        {
          route: "build-profile",
          name: "Build your own profile",
          content: {},
        },
        {
          route: "quiz/end",
          name: "Review Quiz",
          content: {},
        },
        {
          route: "feedback",
          name: "Feedback",
        },
      ],
    },
    responses: {
      route: "responses",
      name: "How to respond",
      stages: [
        {
          route: "quiz/prelim",
          name: "Preliminary Quiz",
          content: {},
        },
        {
          route: "content",
          name: "lecture",
          content: {},
        },
        {
          route: "add-answer",
          name: "Add your own responses",
          content: {},
        },
        {
          route: "quiz/end",
          name: "Review Quiz",
          content: {},
        },
        {
          route: "feedback",
          name: "Feedback",
        },
      ],
    },
    mannerism: {
      route: "mannerism",
      name: "Mannerisms",
      stages: [
        {
          route: "quiz/prelim",
          name: "Prelimanry Quiz",
          content: {},
        },
        {
          route: "content",
          name: "Lecture",
          content: {},
        },
        {
          route: "quiz/end",
          name: "Review Quiz",
          content: {},
        },
        {
          route: "feedback",
          name: "Feedback",
        },
      ],
    },
  },
};

export type ILectureModuleId = keyof typeof routeData["lecture"];
export type IModuleId = ILectureModuleId | "grad"
export type IModuleStage = {
  moduleId: IModuleId;
  stage: number;
}

class RoutesManager {
  static fullLectureRoute = (moduleId: ILectureModuleId, stage: number) => {
    const base = routeData["lecture"][moduleId];
    return `${base["route"]}/${base["stages"][stage - 1]["route"]}`;
  };

  static pathToModuleStage = (path: string): IModuleStage => {
    const arr = path.split("/");
    // Remove leading "/"
    arr.splice(0, 1);
    const paths = arr.splice(0, 2);
    paths.push(arr.join("/"));

    if (paths[0] != "lecture") {
      throw "Cannot get modulestage from non-lecture";
    }
    const stages = routeData["lecture"][paths[1] as ILectureModuleId]["stages"];

    const stage = stages.findIndex((stage) => {
      return stage.route == paths[2];
    });
    return { moduleId: paths[1] as IModuleId, stage: stage + 1 };
  };

  static selfIntroDiyRoute = () => {
    return RoutesManager.fullLectureRoute("self-intro", 3);
  };

  static buildProfileRoute = () => {
    return RoutesManager.fullLectureRoute("experiences", 3);
  };

  static addAnswerRoute() {
    return RoutesManager.fullLectureRoute("responses", 3);
  }

  static async nextLocation(currentRoute: string): Promise<string> {
    const currentModuleStage: IModuleStage = RoutesManager.pathToModuleStage(currentRoute);

    const [error, data] = await trackProgress(
      currentModuleStage.moduleId,
      currentModuleStage.stage,
    );
    if (error) {
      alert(JSON.stringify(error));
      return "/";
    }
    routeStore.update(data.nextStage);
    return routeStore.path();
  }
}

class DataExtractor {
  static getQuizQuestions = (
    moduleId: ILectureModuleId,
    type: string,
  ): QuestionForQuiz => {
    const data = routeData["lecture"][moduleId]["stages"];

    const stage = data.find((stage) => {
      return stage.route == `quiz/${type}`;
    });

    return stage!["content"] as QuestionForQuiz;
  };

  static getModuleContent = (moduleId: ILectureModuleId) => {
    const data = routeData["lecture"][moduleId]["stages"];

    const stage = data.find((stage) => {
      return stage.route == "content";
    });

    return stage!["content"];
  };

  static progressBar = (): ModuleStatus[] => {
    const modules: ModuleStatus[] = [];

    let found = false;
    let status: ModuleStatus["status"] = found ? "future" : "done";
    let moduleStatus: ModuleStatus["status"] = found ? "future" : "done";

    for (const [key, value] of Object.entries(routeData["lecture"])) {
      const module: ModuleStatus = {
        id: key,
        name: value["name"],
        status: "done",
        url: `/lecture/${value["route"]}`,
      };

      module["children"] = value["stages"].map((stage, index) => {
        if (index + 1 == routeStore.stage && key == routeStore.moduleId) {
          found = true;
          status = "current";
          moduleStatus = "current";
        }
        const child: ModuleStatus = {
          id: stage["route"],
          name: stage["name"],
          status: status,
          url: `${module["url"]}/${stage["route"]}`,
        };

        status = found ? "future" : "done";
        return child;
      });

      module["status"] = moduleStatus;
      moduleStatus = found ? "future" : "done";
      modules.push(module);
    }

    return modules;
  };
}

export { routeData, RoutesManager, DataExtractor };
