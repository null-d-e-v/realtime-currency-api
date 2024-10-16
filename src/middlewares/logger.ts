import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  const format = `[method] ${req.method} | [path] ${req.url} | [ip] ${req.socket.remoteAddress}`
  logger.info(format)
  next()
}
