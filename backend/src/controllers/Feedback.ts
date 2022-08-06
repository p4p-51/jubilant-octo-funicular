import { Request, Response } from 'express';

import { BaseController } from './BaseController';

class FeedbackController extends BaseController {
  SubmitFeedback = async (req: Request, res: Response) => {
    const feedback = {
      module: 'asdf',
      stage: 1,
    };
    res.status(200).send({ success: true, nextStage: feedback });
  };
}

export { FeedbackController };
