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
                  explanation:
                    "Your education status is extremely important if you're just starting out. If you'd have formal education in the specific area that's okay as well, tell the interview how you learn the relavent skills",
                },
                {
                  id: "2",
                  text: "Marital Status",
                  explanation:
                    "Marital status should not be included, this does not reflect on your skills. Other things to not include include: age, gender, race etc..",
                },
                {
                  id: "3",
                  text: "Relevant Job Experiences",
                  explanation:
                    "This is extremely important if you're someone who is experienced, it's okay if you don't have a previous job experience, you can talk about something else like an achievement instead ",
                },
                {
                  id: "4",
                  text: "Significant Achievements",
                  explanation:
                    "This can be included if you've recently done something that you're proud of and is relevant to the company or job",
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
                  explanation: "30 seconds might be a bit too short",
                },
                {
                  id: "2",
                  text: "1 Minute",
                  explanation:
                    "While this seems like the most sensible answer, it really depends on the situation!",
                },
                {
                  id: "3",
                  text: "2 Minutes",
                  explanation:
                    "If you're always talking for 2 minutes, you must have lots of experience and achievements! But sometimes it might be a bit too long if you've told them before",
                },
                {
                  id: "4",
                  text: "As long as it is required",
                  explanation:
                    "The duration of the self introduction really depends on your situation with the interviewer. If they already know a bit about you, it's okay for it be short and concise, otherwise, you may wish to go into a bit of detail",
                },
              ],
              answer: "4",
            },
            {
              title: "What is the point of a self-introduction?",
              options: [
                {
                  id: "1",
                  text: "For the recruiter to quickly get to know you and understand your skills and experiences",
                  explanation: "Spot on!",
                },
                {
                  id: "2",
                  text: "In case you go on a date before your job interview so you can reuse the same phrases\n",
                  explanation:
                    "A Job interview is not like a date, but good luck for your date though!",
                },
              ],
              answer: "1",
            },
            {
              title: "How should you structure your self-introduction",
              options: [
                {
                  id: "1",
                  text: "Favourite childhood memory, University study, Retirement plan",
                  explanation:
                    "While this option covers a large aspect of your self, try and keep it relevant to the job",
                },
                {
                  id: "2",
                  text: "Past relevant experiences, Current studies and/or work, Future career goals and aspirations",
                  explanation:
                    "Bingo! It's important to tell the interview about all aspects of you, past, present, and future",
                },
                {
                  id: "3",
                  text: "Full Name, List of qualifications and achievements, Reasons why you'd like to work at the company",
                  explanation:
                    "Explaining your reasons why you'd like to work at the company does not tell the interview about yourself, which is what they're after",
                },
              ],
              answer: "2",
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
                  "      tell them how you got to where you are now. Here you could mention any\n" +
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
                  "      about this role.”<br /><br /> There isn't a set amount of time a self-intro needs to be.\n" +
                  "      You may have already been in communication with the interviewer through emails, therefore they might also know a bit about you, or it could be the first time you've met, in which case, you might need to explain a bit more. Regardless, it should follow a similar format as outlined above <br /><br />You should\n" +
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
                  explanations: [
                    "Walk-through of resume - Does not go into detail or specifics",
                    "Can be improved by example of type of companies you've worked for",
                    "lacks personal characteristics and strengths",
                  ],
                },
                good: {
                  text: "I have a total of seven years in the customer service field. In my last job I managed a team of 14 reps. I have excellent communication and interpersonal skills, and that allows me to work with a broad range of people at various levels. My background includes working in Fortune 500 companies as well as smaller companies. My strength is my ability to organize and coordinate projects, making sure deadlines are met.\n",
                  explanations: [
                    "Presents a good summary of what you have to offer",
                    "Interview knows the number of years of experiences and types of companies you've worked at",
                    "Answer provides a good blend of knowledge-based skills, transferable skills and personality traits",
                  ],
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
          content: [
            {
              title:
                "When the interviewer says 'Tell me about a time when...', what should you talk about?",
              options: [
                {
                  id: "1",
                  text: "Recount a historical event to do with the relevant topic",
                  explanation:
                    "The interviewer would prefer to hear about something which involves you, so they can understand more about you",
                },
                {
                  id: "2",
                  text: "Recount one of your personal experiences to do with the relevant topic",
                  explanation:
                    "Indeed! Talking about your personal past experiences will best help the interviewer to get to know you better",
                },
                {
                  id: "3",
                  text: "Recount an observation you have made while studying your discipline",
                  explanation:
                    "The interviewer would prefer to hear about something which involves you, so they can understand more about you",
                },
                {
                  id: "4",
                  text: "Hypothesize a personal experience to do with the relevant topic",
                  explanation:
                    "The interviewer would prefer to hear about something which you have already done, rather than a hypothetical situation",
                },
              ],
              answer: "2",
            },
            {
              title:
                "What is most important thing that the interviewer is trying to find out in a behavioural interview?",
              options: [
                {
                  id: "1",
                  text: "What type of person you were in the past",
                  explanation:
                    "While the interviewer would definitely like to get to know about your past, it is for the purpose of determining what you would be like in the future as an fellow colleague",
                },
                {
                  id: "2",
                  text: "What type of person you are now",
                  explanation:
                    "While the interviewer is definitely interested in what kind of person you are, what they really want to know is if you will be a good fellow employee to the company",
                },
                {
                  id: "3",
                  text: "How technically skilled you are for the role you're applying for",
                  explanation:
                    "Skills are definitely important when applying for jobs, but it is not the focus of a behavioural interview",
                },
                {
                  id: "4",
                  text: "Whether you are likely to be a good colleague to work with",
                  explanation:
                    "When the interviewer is talking to you, they are trying to gauge what you would be like as a fellow employee of the company",
                },
              ],
              answer: "4",
            },
            {
              title:
                "Is it true that what you talk about must include elements of teamwork?",
              options: [
                {
                  id: "1",
                  text: "Yes, teamwork is an important part of working at a company",
                  explanation:
                    "Teamwork is important, but so are your other skills such as problem solving, time management, etc.",
                },
                {
                  id: "2",
                  text: "No, I can talk about other things which don't involve teamwork",
                  explanation:
                    "Indeed! While teamwork is indeed an important element to show, you can also reveal important qualities about yourself by talking about other experiences",
                },
              ],
              answer: "2",
            },
          ] as QuestionForQuiz[],
        },
        {
          route: "build-profile",
          name: "Build your own profile",
          content: {},
        },
        {
          route: "quiz/end",
          name: "Review Quiz",
          content: [
            {
              title:
                "When the interviewer says 'Tell me about a time when...', what should you talk about?",
              options: [
                {
                  id: "1",
                  text: "Recount a historical event to do with the relevant topic",
                  explanation:
                    "The interviewer would prefer to hear about something which involves you, so they can understand more about you",
                },
                {
                  id: "2",
                  text: "Recount one of your personal experiences to do with the relevant topic",
                  explanation:
                    "Indeed! Talking about your personal past experiences will best help the interviewer to get to know you better",
                },
                {
                  id: "3",
                  text: "Recount an observation you have made while studying your discipline",
                  explanation:
                    "The interviewer would prefer to hear about something which involves you, so they can understand more about you",
                },
                {
                  id: "4",
                  text: "Hypothesize a personal experience to do with the relevant topic",
                  explanation:
                    "The interviewer would prefer to hear about something which you have already done, rather than a hypothetical situation",
                },
              ],
              answer: "2",
            },
            {
              title:
                "What is most important thing that the interviewer is trying to find out in a behavioural interview?",
              options: [
                {
                  id: "1",
                  text: "What type of person you were in the past",
                  explanation:
                    "While the interviewer would definitely like to get to know about your past, it is for the purpose of determining what you would be like in the future as an fellow colleague",
                },
                {
                  id: "2",
                  text: "What type of person you are now",
                  explanation:
                    "While the interviewer is definitely interested in what kind of person you are, what they really want to know is if you will be a good fellow employee to the company",
                },
                {
                  id: "3",
                  text: "How technically skilled you are for the role you're applying for",
                  explanation:
                    "Skills are definitely important when applying for jobs, but it is not the focus of a behavioural interview",
                },
                {
                  id: "4",
                  text: "Whether you are likely to be a good colleague to work with",
                  explanation:
                    "When the interviewer is talking to you, they are trying to gauge what you would be like as a fellow employee of the company",
                },
              ],
              answer: "4",
            },
            {
              title:
                "Is it true that what you talk about must include elements of teamwork?",
              options: [
                {
                  id: "1",
                  text: "Yes, teamwork is an important part of working at a company",
                  explanation:
                    "Teamwork is important, but so are your other skills such as problem solving, time management, etc.",
                },
                {
                  id: "2",
                  text: "No, I can talk about other things which don't involve teamwork",
                  explanation:
                    "Indeed! While teamwork is indeed an important element to show, you can also reveal important qualities about yourself by talking about other experiences",
                },
              ],
              answer: "2",
            },
          ] as QuestionForQuiz[],
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
          content: [
            {
              title: "What should you wear to an in-person interview?",
              options: [
                {
                  id: "1",
                  text: "Suit and Tie",
                  explanation:
                    "Not all offices have suit and tie dress codes, you want to dress like if you're working there",
                },
                {
                  id: "2",
                  text: "Your hypebeast outfit",
                  explanation:
                    "Everyone will know you got that swagger, but do you have the skills?",
                },
                {
                  id: "3",
                  text: "Casual everyday outfit",
                  explanation:
                    "Tricked you! while this may seem the most appropriate answers, it actually depends!",
                },
                {
                  id: "4",
                  text: "It Depends",
                  explanation:
                    "Correct - Best to ask the interview beforehand what you should wear",
                },
              ],
              answer: "4",
            },
            {
              title:
                "What's NOT an advantage of arriving early to an in-person interview?",
              options: [
                {
                  id: "1",
                  text: "Gives you spare time to go to the bathroom",
                  explanation: "Should you need to go, you'll have time",
                },
                {
                  id: "2",
                  text: "Gives you spare time to look for the location",
                  explanation:
                    "Sometimes the location can be a bit tricky to find, getting there early means you can find it without worrying",
                },
                {
                  id: "3",
                  text: "Gives you spare time to calm your nerves",
                  explanation:
                    "If you arrive early, you can take some time to relax and do some breathing exercises to calm down",
                },
                {
                  id: "4",
                  text: "Gives you spare time to listen in on the interview before yours",
                  explanation:
                    "While it does seem like a good idea, you wouldn't want other candidates to snoop during your interview either right?",
                },
              ],
              answer: "4",
            },
            {
              title:
                "Where is the best place for lighting for an online interview",
              options: [
                {
                  id: "1",
                  text: "In front/above",
                  explanation:
                    "This is the perfect position, it will make sure your face is lit",
                },
                {
                  id: "2",
                  text: "Below/Behind",
                  explanation:
                    "If there is a light behind you, it'll cast a shadow on your face, making it hard for the camera",
                },
                {
                  id: "1",
                  text: "To the side",
                  explanation:
                    "If your light it to the side, half your face will be unevenly light",
                },
              ],
              answer: "1",
            },
            {
              title: "What should you NOT do before your online interview?",
              options: [
                {
                  id: "1",
                  text: "Play a high-intensity video game",
                  explanation:
                    "Playing video games is probably not the best idea before an interview",
                },
                {
                  id: "2",
                  text: "Test your mic and camera",
                  explanation:
                    "Testing equipment is really important as this is the method of verbal and visual communication between you and the interviewer",
                },
                {
                  id: "3",
                  text: "Research the company",
                  explanation:
                    "Research the company and prepare questions you have about the role is a must",
                },
                {
                  id: "4",
                  text: "Stay hydrated",
                  explanation:
                    "During an interview, you'll be taking a lot, so it's important to stay hydrated before and throughout the interview",
                },
              ],
            },
          ] as QuestionForQuiz[],
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
                  "      quantify the result with numbers if possible. <br /><br />" +
                  "      The best want to learn and understand the STAR method is by practising! Follow this" +
                  "      structure when preparing for interview and you'll be able to do it on the spot in no time!",
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
            {
              type: "SectionExample",
              props: {
                title:
                  "Example: Tell me about a time when you had to adapt quickly to a change",
                bad: {
                  text:
                    "Change is something that happens every day in this industry. A\n" +
                    "policy difference can make everyone jump, and we have very lit-\n" +
                    "tle power over the situation. That has been one of the most frus-\n" +
                    "trating things about my current job. There were just too many\n" +
                    "changes, without any thought behind them. I don’t want to com-\n" +
                    "plain about management, but sometimes they changed the way\n" +
                    "we were doing something and then a week later changed it back\n" +
                    "to the way it had been before. That can be very frustrating for an\n" +
                    "employee.",
                  explanation: [
                    "Negative, whiny tone",
                    "Bad mouthing former employer",
                    "No specific example of change",
                  ],
                },
                good: {
                  text:
                    "When I ran the numbers on a certain food item, I discovered that\n" +
                    "sales were declining. I had to move quickly to come up with a\n" +
                    "plan to turn the sales around. Using demographics, I discovered\n" +
                    "that we were off on our target market. I immediately put togeth-\n" +
                    "er a proposal, and within a week we had a new marketing focus\n" +
                    "to reach the right customers. The new plan included coupons,\n" +
                    "two-for-ones, and special displays to attract customers. By the\n" +
                    "end of the month sales rose significantly",
                  explanation: [
                    "Clear situation, task, action and result",
                    "Provided specific example",
                  ],
                },
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
          content: [
            {
              type: "TitleBlock",
              props: {
                title: "How-to Interview",
                subtitle: "A simple list of interview dos & don'ts",
                module: "Mannerism",
                body: "Now you're practise for your interview, what are some of the other things you should know? Here's a bit of advice we have for your interview that's not related to your responses",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "Interview Behaviour",
                body: "This section is split into two sub-sections, one for in-persons interviews and online interviews. It's recommend that you read through both as the tips may be applicable to both!",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "In-person Interviewers",
                body:
                  "Here are some tips if you're interviewing in person <ul>" +
                  "<li>Dress appropriatly - If you're under or overdressed you'll stick out like a sore thumb. Avoid this by noting down the dresscode of the company, if you're unsure, ask your interview or dress smart casual</li>" +
                  "<li>Arrive early - Try getting there 10-15 minutes before your scheduled start time. It'll give you some wiggle room if you're unable to find the meeting room or need to go to the bath room</li>" +
                  "</ul>",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "Online Interviews",
                body:
                  "Here are some tips if you're interviewing online <ul>" +
                  "<li>Find a suitable space - Make sure you're in a quiet room with a good internet connection, ventilation, and close the door behind you; You'd hate if someone busts through as you're talking</li>" +
                  "<li>Remove distractions - Mute your phone and close any applications that might distract you</li>" +
                  "<li>Test your mic and camera - Make sure the microphone picks up your voice and the camera has good lighting. The best position for a light is above or infront of you</li>" +
                  "<li>Arrive early - Just like in-person interviews, try and arrive a bit early. Just in case your mic or camera stops working, you might have a chance to fix it</li>" +
                  "</ul>",
              },
            },
            {
              type: "SectionParagraph",
              props: {
                title: "Other tips",
                body:
                  "Here are some other tips we have for your interviews <ul>" +
                  "<li>Research the company and your interviewer</li>" +
                  "<li>Prepare and ask questions</li>" +
                  "<li>Be kind and respectful to everyone you meet</li>" +
                  "</ul>",
              },
            },
          ],
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
