import { Request, Response } from "express";

import { components } from "../interfaces/api";
import { UserService } from "../services/UserService";
import { httpResponse } from "../utils/response";
import { BaseController } from "./BaseController";
import { ILabels } from "./Label";
import { CounterService } from "../services/CounterService";

export type IExperience = components["schemas"]["Experience"];

/**
 * Controller that handles all the experience related functions
 */
class ExperienceController extends BaseController {

  constructor() {
    super();
  }

  GetAllExperiences = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const user = await new UserService().getUser(userId, ["experiences"]);

    res.status(200).json(user["experiences"]);
  };

  AddExperience = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);

    const name = req.body["name"];
    const labels = req.body["labels"];

    if (!name) {
      httpResponse(res, 400, "Cannot have empty experience name")
      return
    }

    // This new experience Id can be moved inside the UserService's setExperience
    // But maybe lead to circular dependency, and we're not going to run out anyway...
    let experienceId: number =
      await CounterService.getNextCounter("experience");

    try {
      experienceId = await new UserService().setExperience(
        userId,
        experienceId,
        { name, labels },
      );
      res.status(200).send({ success: true, experienceId });
      return;
    } catch (err) {
      httpResponse(res, 500, err);
      return;
    }
  };

  updateExperience = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const experienceId: number = parseInt(req.params["experienceId"]);
    const labels: ILabels[] = req.body["labels"];
    const newName: string = req.body["name"];
    const userService = new UserService();

    const user = await userService.getUser(userId, ["experiences"], {
      "experiences.experienceId": experienceId,
    });

    const value = {};

    if (user != null) {
      // Checking if the name is being updated
      if (newName) {
        // Check if the new name already exists or not
        const found = user["experiences"].find((exp) => {
          return exp.name == newName;
        });
        if (found) {
          httpResponse(res, 400, `Name: ${newName} already exists`);
          return;
        }
        value["experiences.$.name"] = newName;
      }
      if (labels) {
        value["experiences.$.labels"] = labels;
      }

      const count = await userService.setUser(
        userId,
        value,
        { "experiences.experienceId": experienceId },
      );
      res.status(200).json({ success: true });
      return;
    }
    httpResponse(res, 404, `Cannot find experience with id ${experienceId}, maybe you were supposed to create a new one?`);
  };

  deleteExperience = async (req: Request, res: Response) => {
    const userId: number = parseInt(res.locals["userId"]);
    const experienceId: number = parseInt(req.params["experienceId"]);
    const userService = new UserService();

    const user = await userService.getUser(userId, ["experiences"], {
      "experiences.experienceId": experienceId,
    });

    if (user != null) {
      const result = await userService.deleteExperience(userId, experienceId);
      if (result) {
        res.status(200).json({ success: true });
        return;
      } else {
        httpResponse(res, 500, `Found but cannot delete`);
        return;
      }
    }

    httpResponse(res, 404, `Cannot find experience with id ${experienceId}`);
  };
}

export { ExperienceController };
