import { Request, Response } from 'express';

import { BaseController } from './BaseController';
import { QuestionService } from "../services/QuestionService";
import { components } from "../interfaces/api";
import { UserService } from "../services/UserService";
import { httpResponse } from "../utils/response";
import * as http from "http";

export type IAnswer = components['schemas']['Answer']

class QuestionController extends BaseController {
  questionService

  constructor() {
    super();
    this.questionService = new QuestionService()
  }
  GetQuestionsWithExperiences = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['userId']);
    const questions = await this.questionService.getAllQuestionWithExperiences(userId)

    res.status(200).send(questions);
  };
  GetAnswer = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['userId']);
    const questionId: number = parseInt(req.params['questionId'])

    const answers = await new UserService().getAnswers(userId, questionId)

    if (answers.length > 0) {
      res.status(200).json(answers);
      return
    } else {
      httpResponse(res, 404, "No answers found")
    }
  };

  AnswerQuestion = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['userId']);
    const questionId: number = parseInt(req.params['questionId'])
    const experienceId: number = parseInt(req.body['experienceId'])
    const answer: IAnswer = req.body['answer']

    const questionIds: number[] = await this.questionService.getQuestionIds()
    if (!questionIds.includes(questionId)) {
      httpResponse(res, 404, `Cannot find question with Id ${questionId}`)
      return
    }

    const experienceIds: number[] = await new UserService().getUserExperienceIds(userId)
    if (!experienceIds.includes(experienceId)) {
      httpResponse(res, 404, `Cannot find experience with Id ${experienceId}`)
      return
    }

    const succ: boolean = await new UserService().findAndUpdateAnswer(userId, questionId, experienceId, answer)

    if (succ) {
      res.status(200).send({ success: true });
      return
    } else {
      httpResponse(res, 500, `Update to answer not successful`)
      return
    }
  };
}

export { QuestionController };
