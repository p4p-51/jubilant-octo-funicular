import { Request, Response } from "express";

import { components, paths } from "../interfaces/api";
import { LabelService } from "../services/LabelService";
import { httpResponse } from "../utils/response";
import { BaseController } from "./BaseController";

export type ILabels = components["schemas"]["Labels"];
export type IFullLabel = paths['/labels']['get']['responses']['200']['content']['application/json']

/**
 * Controller that handles the Labels API
 */
class LabelController extends BaseController {
  GetLabel = async (req: Request, res: Response) => {
    const labelService = new LabelService();
    const labels: IFullLabel[] = await labelService.getLabels();

    if (!labels) {
      httpResponse(res, 404, "Cannot find labels");
      return;
    }
    res.status(200).json(labels);
  };
}

export { LabelController };
