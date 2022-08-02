import { Request, Response } from 'express';

import { components } from '../interfaces/api';
import { ExperienceService } from '../services/ExperienceService';
import { LabelService } from '../services/LabelService';
import { UserService } from '../services/UserService';
import { httpResponse } from '../utils/response';
import { BaseController } from './BaseController';
import { ILabels } from './Label';

export type IExperience = components['schemas']['Experience'];

class ExperienceController extends BaseController {
  experienceService;

  constructor() {
    super();
    this.experienceService = new ExperienceService();
  }

  GetAllExperiences = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['uid']);
    const user = await new UserService().getUser(userId, ['experiences']);

    res.status(200).json(user['experiences']);
  };

  AddExperience = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['uid']);

    const name = req.body['name'];
    const labels = req.body['labels'];

    // This new experience Id can be moved inside the UserService's setExperience
    // But maybe lead to circular dependency, and we're not going to run out anyway...
    let experienceId: number =
      await this.experienceService.getNextExperienceId();
    const ids = await new LabelService().getLabelIds(labels);

    try {
      experienceId = await new UserService().setExperience(
        userId,
        experienceId,
        { name, labels: ids }
      );
      res.status(200).send({ success: true, experienceId });
      return;
    } catch (err) {
      httpResponse(res, 500, err);
      return;
    }
  };

  addLabel = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['uid']);
    const experienceId: number = parseInt(req.params['experienceId']);
    const labels: ILabels[] = req.body['labels'];
    const userService = new UserService();

    const ids = await new LabelService().getLabelIds(labels);

    const user = await userService.getUser(userId, ['experiences'], {
      'experiences.experienceId': experienceId,
    });

    if (user != null) {
      const count = await userService.addToSetUser(
        userId,
        { 'experiences.$.labels': { $each: ids } },
        { 'experiences.experienceId': experienceId }
      );
      res.status(200).json({ success: true });
    } else {
      httpResponse(res, 404, `Cannot find experience with id ${experienceId}`);
    }
  };

  deleteLabel = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals['uid']);
    const experienceId: number = parseInt(req.params['experienceId']);
    const labels: ILabels[] = req.body['labels'];
    const userService = new UserService();

    const user = await userService.getUser(userId, ['experiences'], {
      'experiences.experienceId': experienceId,
    });

    if (user != null) {
      const experienceLabels = user['experiences'][0]['labels'];
      const remainingLabels = experienceLabels.filter(
        (x) => !labels.includes(x)
      );

      const ids = await new LabelService().getLabelIds(remainingLabels);

      //I should create function to delete from list instead of subtracting the two lists and the setting the labels to be the remainingLabls
      const count = await userService.setUser(
        userId,
        { 'experiences.$.labels': ids },
        { 'experiences.experienceId': experienceId }
      );
      res.status(200).json({ success: true });
    } else {
      httpResponse(res, 404, `Cannot find experience with id ${experienceId}`);
    }
  };
}

export { ExperienceController };
