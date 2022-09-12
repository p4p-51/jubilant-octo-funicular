import { Request, Response } from "express";

import { components, paths } from "../interfaces/api";
import { ModuleService } from "../services/ModuleService";
import { UserService } from "../services/UserService";
import { httpResponse } from "../utils/response";
import { BaseController } from "./BaseController";

export type IFeedback =
  paths["/modules/{moduleId}/feedback"]["post"]["requestBody"]["content"]["application/json"];
export type IQuizAnswer =
  paths["/modules/{moduleId}/quiz"]["post"]["requestBody"]["content"]["application/json"];
export type IModuleId = components["schemas"]["Module"];
export type IModuleStage = components["schemas"]["ModuleStage"];

/**
 * Controller that handles the modules APIs
 */
class ModuleController extends BaseController {
  moduleService;

  constructor() {
    super();
    this.moduleService = new ModuleService();
  }

  SubmitFeedback = async (req: Request, res: Response) => {
    const moduleId: IModuleId = req.params["moduleId"] as IModuleId;
    const userId: number = parseInt(res.locals["userId"]);
    const feedback: IFeedback = {
      rating: parseInt(req.body["rating"]),
      feedback: req.body["feedback"],
    };

    const nextStage: IModuleStage = await this.moduleService.submitFeedback(
      feedback,
      moduleId,
      userId,
    );

    if (nextStage) {
      res.status(200).json({ success: true, nextStage });
    }
  };

  SubmitQuiz = async (req: Request, res: Response) => {
    const moduleId: IModuleId = req.params["moduleId"] as IModuleId;
    const userId: number = parseInt(res.locals["userId"]);

    if (moduleId == "grad") {
      httpResponse(res, 400, "Cannot submit quiz for graduation");
      return;
    }

    const numCorrect: number = parseInt(req.body["numCorrect"]);
    const numQuestion: number = parseInt(req.body["numQuestion"]);

    if (numCorrect > numQuestion) {
      httpResponse(
        res,
        400,
        "Number of correct answers cannot exceed the number of questions",
      );
    }

    const quizAnswers: IQuizAnswer = {
      stage: req.body["stage"],
      numCorrect,
      numQuestion,
    };

    const success: boolean = await new UserService().AddOrUpdateQuiz(userId, moduleId, quizAnswers);

    if (success) {
      res.status(200).send({ success: true });
    } else {
      httpResponse(res, 500, "Cannot submit quiz");
    }
  };
}

export { ModuleController };
