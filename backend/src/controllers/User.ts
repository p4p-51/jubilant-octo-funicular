import { UserService } from '../services/UserService';
import { BaseController } from './BaseController';
import { Request, Response } from "express";
import Error from '../utils/error'

class UserController extends BaseController {
  userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  GetUser = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params["userId"])
    const user = await this.userService.getUser(userId);

    if (user === null) {
      res.status(404).send(Error(404, "User cannot be found"))
    } else {
      res.status(200).json(user);
    }
  };

  CompleteStage = async (req: Request, res: Response) => {
    const user = req.params.userId
    const stage = req.body['stage']


    const next = {
      module: 'asdf',
      stage: 1,
    };

    res.status(200).send({ success: true, nextStage: next });
  };

  PostIntro = async (req, res) => {
    res.status(200).send({ success: true });
  };

  GetIntro = async (req, res) => {
    const body = {
      body: 'my intro',
      attributes: ['name', 'education'],
    };

    res.status(200).send(body);
  };

  GetStats = async (req, res) => {
    const body = {
      accuracy: {
        before: 90,
        after: 100,
      },
      numExperiences: 4,
      numQuestionsAnswered: 16,
      completedModules: [
        'Self Introduction',
        'Thinking of Experiences',
        'Organising Situations',
        'Mannerisms',
      ],
    };
    res.status(200).send(body);
  };
}

export { UserController };
