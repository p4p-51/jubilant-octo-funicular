import { Request, Response } from 'express';

import { LabelService } from '../services/LabelService';
import {httpResponse} from '../utils/response';
import { BaseController } from './BaseController';

class LabelController extends BaseController {
  GetLabel = async (req: Request, res: Response) => {
    const labelService = new LabelService();

    const labels = await labelService.getLabels();

    if (labels) {
      res.status(200).json(labels);
    } else {
      httpResponse(res, 404, 'Cannot find labels');
    }
  };
}

export { LabelController };
