import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  const format = `METHOD:${req.method} PATH:${req.url} IP:${req.socket.remoteAddress}`
  logger.info(format)
  next()
}
