import { Request, Response } from "express";

import { components } from "../interfaces/api";
import { ModuleService } from "../services/ModuleService";
import { UserService } from "../services/UserService";
import { httpResponse } from "../utils/response";
import { BaseController } from "./BaseController";
import { IModuleId, IModuleStage } from "./Module";
import { CounterService } from "../services/CounterService";

type IUserIntro = components["schemas"]["SelfIntro"];

/**
 * Controller that handles all the user APIs
 */
class UserController extends BaseController {
  userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }


  GetUser = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const user = await this.userService.getUser(userId, ["progress"]);

    if (user === null) {
      httpResponse(res, 404, "User cannot be found");
    } else {
      res.status(200).json(user);
    }
  };

  Register = async (req: Request, res: Response) => {
    const uuid = res.locals["uuid"];
    const userId: number = res.locals["userId"];

    if (userId === null) {
      const newUserId = await CounterService.getNextCounter("user");

      let newUser = {
        progress: {
          "moduleId": "self-intro",
          "stage": 1,
        },
        intro: {
          body: "",
          attributes: [],
        },
        quizzes: [],
        experiences: [],
        answers: [],
        user: {
          uuid: uuid,
          userId: newUserId,
        },
      };

      const success: boolean = await this.userService.createUser(newUser);

      if (success) {
        res.status(200).json(newUser);
        return;
      }
      httpResponse(res, 500, "Cannot create user");
    } else {
      httpResponse(res, 400, "user already exists");
    }
  };

  SkipModules = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const skipModules: IModuleId[] = req.body;

    const modules: IModuleId[] = await new ModuleService().getModulesList();
    // @ts-ignore
    const validModules: IModuleId[] = skipModules.filter((module) => modules.includes(module.toLowerCase()));

    if (validModules.length == 0) {
      httpResponse(res, 400, "Request contained zero (0) valid module Ids");
      return;
    }
    const result = await this.userService.setUser(userId, { "user.skipModules": validModules });

    if (!result) {
      httpResponse(res, 500, "Cannot find the user");
      return;
    }
    res.status(200).json({ success: true });
  };

  CompleteStage = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const moduleStage: IModuleStage = {
      moduleId: req.body["moduleId"],
      stage: parseInt(req.body["stage"]),
    };

    const skipModules: IModuleId[] = await this.userService.getSkipModules(userId);

    try {
      let nextStage: IModuleStage = await new ModuleService().getNextStage(
        moduleStage,
      );

      // If the next stage is part of the skipping modules, get the next module
      let moduleId = nextStage.moduleId;
      if (skipModules.includes(nextStage.moduleId)) {
        nextStage = await new ModuleService().getNextModule(nextStage.moduleId, skipModules);
      }

      const success: boolean = await this.userService.setUser(userId, {
        progress: nextStage,
      });

      if (!success) {
        httpResponse(res, 500, "Cannot update user's new module");
        return;
      }
      res.status(200).json({ success: true, nextStage: nextStage });

    } catch {
      httpResponse(res, 404, "moduleStage not found");
    }
  };

  PostIntro = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const intro: IUserIntro = {
      body: req.body["body"],
      attributes: req.body["attributes"],
    };

    const success: boolean = await this.userService.setUser(userId, { intro });
    if (!success) {
      httpResponse(res, 404, "Cannot find user");
      return;
    }
    res.status(200).json({ success: true });
  };

  GetIntro = async (req, res) => {
    const userId: number = parseInt(res.locals["userId"]);
    const userIntro = await this.userService.getUserIntro(userId);

    if (userIntro === null) {
      httpResponse(res, 404, `Cannot find user with id ${userId}`);
      return;
    }
    res.status(200).json(userIntro["intro"] ? userIntro["intro"] : {});
  };

  // TODO
  GetStats = async (req, res) => {
    const body = {
      accuracy: {
        before: 90,
        after: 100,
      },
      numExperiences: 4,
      numQuestionsAnswered: 16,
      completedModules: [
        "Self Introduction",
        "Thinking of Experiences",
        "Organising Situations",
        "Mannerisms",
      ],
    };
    res.status(200).send(body);
  };
}

export { UserController };
