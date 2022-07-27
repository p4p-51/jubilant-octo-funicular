import { BaseController } from './BaseController';
import { Request, Response } from 'express';

class ModuleController extends BaseController {
  CompleteStage = async (req: Request, res: Response) => {};
  SubmitFeedback = async (req: Request, res: Response) => {
    const feedback = {
      module: 'self-intro',
      stage: 2,
    };

    res.status(200).send({ success: true, nextStage: feedback });
  };
  SubmitQuiz = async (req: Request, res: Response) => {
    res.status(200).send({ success: true });
  };
}

export { ModuleController };
