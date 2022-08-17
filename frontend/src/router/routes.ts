const routesManager = {
  "lecture": {
    "self-intro": {
      route: "self-intro",
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

export { routesManager, UsefulRoutes };