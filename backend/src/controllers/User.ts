import { Request, Response } from 'express';

import { components } from '../interfaces/api';
import { ModuleService } from '../services/ModuleService';
import { UserService } from '../services/UserService';
import httpResponse from '../utils/response';
import { BaseController } from './BaseController';

type IModuleStage = components['schemas']['ModuleStage'];
type IUserIntro = components['schemas']['SelfIntro'];

class UserController extends BaseController {
  userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  }

  GetUser = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params['userId']);
    const user = await this.userService.getUser(userId);

    if (user === null) {
      res.status(404).send(httpResponse(404, 'User cannot be found'));
    } else {
      res.status(200).json(user);
    }
  };

  CompleteStage = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params['userId']);
    const module: string = req.body['module'];
    const stage: number = parseInt(req.body['stage']);

    const moduleStage: IModuleStage = {
      module: module,
      stage: stage,
    };

    try {
      const nextStage: IModuleStage = await new ModuleService().getNextStage(
        moduleStage
      );
      const success: boolean = await this.userService.updateUser(
        userId,
        'progress',
        nextStage
      );
      if (success) {
        res.status(200).json({ success: true, nextStage: nextStage });
      } else {
        res
          .status(500)
          .json(httpResponse(500, "Cannot update user's new module"));
      }
    } catch {
      res.status(404).json(httpResponse(404, 'moduleStage not found'));
    }
  };

  PostIntro = async (req: Request, res: Response) => {
    const userId: number = parseInt(req.params['userId']);
    const intro: IUserIntro = {
      body: req.body['body'],
      attributes: req.body['attributes'],
    };

    const success: boolean = await this.userService.updateUser(
      userId,
      'intro',
      intro
    );
    if (success) {
      res.status(200).json(httpResponse(200, 'success'));
    } else {
      res.status(404).json(httpResponse(404, 'Cannot find user'));
    }
  };

  GetIntro = async (req, res) => {
    const userId: number = parseInt(req.params['userId']);
    const userIntro = await this.userService.getUserIntro(userId);

    if (userIntro === null) {
      res
        .status(404)
        .json(httpResponse(404, `Cannot find user with id ${userId}`));
    } else {
      res.status(200).json(userIntro['intro'] ? userIntro['intro'] : {});
    }
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
