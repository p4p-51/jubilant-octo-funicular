import { Response } from "express";
import { logger } from "./logger";

const httpResponse = (
  response: Response,
  code: number,
  message: string,
): void => {
  if (code > 300) {
    logger.logError(message)
  }
  response.status(code).json({ code, message });
};

export { httpResponse };
