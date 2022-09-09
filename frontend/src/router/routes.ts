/* tslint:disable */
import QuestionForQuiz from "@/types/QuizQuestion.interface";
import { trackProgress } from "@/apis/api";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { routeStore } from "@/stores/route.store";

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
              title: "What should you NOT include in your self-introduction?",
              options: [
                {
                  id: "1",
                  text: "Education",
                  explanation: "Filler",
                },
                {
                  id: "2",
                  text: "Marital Status",
                  explanation: "",
                },
                {
                  id: "3",
                  text: "Relevant Job Experiences",
                  explanation: "",
                },
                {
                  id: "4",
                  text: "Significant Achievements",
                  explanation: "",
                },
              ],
              answer: "2",
            },
            {
              title: "How long should a self-introduction be?",
              options: [
                {
                  id: "1",
                  text: "30 Seconds",
                  explanation: "",
                },
                {
                  id: "2",
                  text: "1 Minute",
                  explanation: "",
                },
                {
                  id: "3",
                  text: "1-2 Minutes",
                  explanation: "",
                },
                {
                  id: "4",
                  text: "As long as it is required",
                  explanation: "",
                },
              ],
              answer: "4",
            },
            {
              title: "What is the point of a self-introduction?",
              options: [
                {
                  id: "1",
                  text: "For the recruiter to get to know you and understand your skills and experiences",
                  explanation: "",
                },
                {
                  id: "2",
                  text: "In case you go on a date before your job interview so you can reuse the same phrases\n",
                  explanation: "",
                },
              ],
              answer: "1",
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
                  '        href="https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself"\n' +
                  "      >https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself </a\n" +
                  "      ><br />\n" +
                  "      <a\n" +
                  '        href="https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples"\n' +
                  "      >https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples</a\n" +
                  "      ><br />\n" +
                  "      <a\n" +
                  '        href="https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself"\n' +
                  "      >\n" +
                  "        https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself </a\n" +
                  "      ><br />",
              },
            },
            {
              type: "SectionExample",
              props: {
                title: "An example",
                bad: {
                  text:
                    "I was born in Cincinnati. My mother was a nurse, and my father\n" +
                    "was a lawyer. I went to the local high school and then attended\n" +
                    "the state college and graduated with a major in English. I worked\n" +
                    "for four years at a high-tech company, where I was a customer\n" +
                    "service rep. Then I moved to a large company and worked there\n" +
                    "for two years as a help desk rep. I was at my last company for one\n" +
                    "year as a manager of customer service.\n",
                  explanations: "",
                },
                good: {
                  text: "I have a total of seven years in the customer service field. In my last job I managed a team of 14 reps. I have excellent communication and interpersonal skills, and that allows me to work with a broad range of people at various levels. My background includes working in Fortune 500 companies as well as smaller companies. My strength is my ability to organize and coordinate projects, making sure deadlines are met.\n",
                  explanations: "",
                },
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
          content: [
            {
              title: "What should you NOT include in your self-introduction?",
              options: [
                {
                  id: "1",
                  text: "Education",
                  explanation: "Filler",
                },
                {
                  id: "2",
                  text: "Marital Status",
                  explanation: "",
                },
                {
                  id: "3",
                  text: "Relevant Job Experiences",
                  explanation: "",
                },
                {
                  id: "4",
                  text: "Significant Achievements",
                  explanation: "",
                },
              ],
              answer: "2",
            },
            {
              title: "How long should a self-introduction be?",
              options: [
                {
                  id: "1",
                  text: "30 Seconds",
                  explanation: "",
                },
                {
                  id: "2",
                  text: "1 Minute",
                  explanation: "",
                },
                {
                  id: "3",
                  text: "1-2 Minutes",
                  explanation: "",
                },
                {
                  id: "4",
                  text: "As long as it is required",
                  explanation: "",
                },
              ],
              answer: "4",
            },
            {
              title: "What is the point of a self-introduction?",
              options: [
                {
                  id: "1",
                  text: "For the recruiter to get to know you and understand your skills and experiences",
                  explanation: "",
                },
                {
                  id: "2",
                  text: "In case you go on a date before your job interview so you can reuse the same phrases\n",
                  explanation: "",
                },
              ],
              answer: "1",
            },
          ] as QuestionForQuiz[],
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
      name: "How to respond (STAR)",
      stages: [
        {
          route: "quiz/prelim",
          name: "Preliminary Quiz",
          content: {},
        },
        {
          route: "content",
          name: "lecture",
          content: [
            {
              type: "TitleBlock",
              props: {
                title: "How to structure a good response?",
                subtitle: "How to introduce yourself in a hurry",
                module: "Self introduction",
                body: "A good behavioural interview response must be specific, concise, include\n      action, demonstrate the your role, relevant, and demonstrate results. The\n      STAR (Situation, task, action, and result) model is an easy and initiative\n      strategy for structuring stories in response to interview questions.",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "STAR Technique",
                body:
                  "S - The goal here is to set the stage and give context to the situation.\n" +
                  "      The example you should be specific and concise. Enough details should be\n" +
                  "      provided so the recruiter can paint a picture of the situation.\n" +
                  "      <br /><br />T - Here you should focus on highlighting your\n" +
                  "      responsibilities or roles in the situation. What were the goals and\n" +
                  "      objectives you set out to do? <br /><br />A - Describe and explains the\n" +
                  "      actions you took to handle the situation and overcome the tasks at hand.\n" +
                  "      This is your opportunity to showcase specific step you took, dig deep to\n" +
                  "      make sure you provide enough information about exactly what you did. Be\n" +
                  "      careful that you don’t describe what the team or group did when talking\n" +
                  "      about a project, but what you actually did. Use the word “I,” not “we”\n" +
                  "      when describing actions.<br /><br />The part is crucial for the overall\n" +
                  "      success of your response, try identify and discuss a few impactful actions\n" +
                  "      you took throughout the situation<br /><br />R - Discuss the outcomes of\n" +
                  "      the actions you took and how you made a difference. Did you complete your\n" +
                  "      tasks and achieve your goals, if not, what did you learn in the process\n" +
                  "      and what will you do differently? Take credit for your actions and try to\n" +
                  "      quantify the result with numbers if possible. <br /><br />",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "Common questions and examples",
                body:
                  "<ul>\n" +
                  "        <li>Tell me about a time when…</li>\n" +
                  "        <li>What do you do when…</li>\n" +
                  "        <li>Have you ever…</li>\n" +
                  "        <li>Give me an example of…</li>\n" +
                  "        <li>Describe a situation…</li>\n" +
                  "      </ul>",
              },
            },
          ],
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
export type IModuleId = ILectureModuleId | "grad";
export type IModuleStage = {
  moduleId: IModuleId;
  stage: number;
};

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
    return RoutesManager.fullLectureRoute("experiences", 2);
  };

  static addAnswerRoute() {
    return RoutesManager.fullLectureRoute("responses", 3);
  }

  static async nextLocation(currentRoute: string): Promise<string> {
    const currentModuleStage: IModuleStage =
      RoutesManager.pathToModuleStage(currentRoute);

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
  ): QuestionForQuiz[] => {
    const data = routeData["lecture"][moduleId]["stages"];

    const stage = data.find((stage) => {
      return stage.route == `quiz/${type}`;
    });

    return stage!["content"] as QuestionForQuiz[];
  };

  static getModuleContent = (moduleId: ILectureModuleId) => {
    const data = routeData["lecture"][moduleId]["stages"];

    const stage = data.find((stage) => {
      return stage.route == "content";
    });

    return stage!["content"];
  };

  static moduleNames = (): string[] => {
    return Object.values(routeData["lecture"]).map((module) => {
      return module.name;
    });
  };

  static progressBar = (routeStoreRef: any): ModuleStatus[] => {
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
        if (index + 1 == routeStoreRef.stage && key == routeStoreRef.moduleId) {
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
