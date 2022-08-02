import { Response } from 'express';

const httpResponse = (
  response: Response,
  code: number,
  message: string
): void => {
  response.status(code).json({ code, message });
};

export { httpResponse };
