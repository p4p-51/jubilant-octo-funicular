import { Request, Response } from "express";

import { BaseController } from "./BaseController";
import { ModuleService } from "../services/ModuleService";

import { components, paths } from "../interfaces/api";
import { UserService } from "../services/UserService";

import { httpResponse } from "../utils/response";

export type IFeedback = paths["/modules/{moduleId}/feedback"]["post"]["requestBody"]["content"]["application/json"]
export type IQuizAnswer = paths["/modules/{moduleId}/quiz"]["post"]["requestBody"]["content"]["application/json"]
export type IModuleId = components["schemas"]["Module"]
export type IModuleStage = components["schemas"]["ModuleStage"];

class ModuleController extends BaseController {
  moduleService;

  constructor() {
    super();
    this.moduleService = new ModuleService();
  }

  SubmitFeedback = async (req: Request, res: Response) => {
    const moduleId: IModuleId = req.params["moduleId"] as IModuleId;
    const feedback: IFeedback = {
      rating: parseInt(req.body["rating"]),
      feedback: req.body["feedback"],
    };

    const nextStage: IModuleStage = await this.moduleService.submitFeedback(feedback, moduleId);

    if (nextStage) {
      res.status(200).json({ success: true, nextStage });
    }
  };

  SubmitQuiz = async (req: Request, res: Response) => {
    const moduleId: IModuleId = req.params["moduleId"] as IModuleId;

    if (moduleId == "grad") {
      httpResponse(res, 400, "Cannot submit quiz for graduation");
      return;
    }

    const numCorrect:number =parseInt(req.body["numCorrect"])
    const numQuestion:number = parseInt(req.body["numQuestion"])

    if (numCorrect > numQuestion) {
      httpResponse(res, 400, "Number of correct answers cannot exceed the number of questions")
    }

    const quizAnswers: IQuizAnswer = {
      stage: req.body["stage"],
      numCorrect,
      numQuestion,
    };

    // Temp until auth is done
    const userId = 1;
    const suc: Boolean = await new UserService().pushUser(userId, "quizzes", { moduleId, ...quizAnswers });

    if (suc) {
      res.status(200).send({ success: true });
    } else {
      httpResponse(res, 500, "Cannot submit quiz");
    }
  };
}

export { ModuleController };
