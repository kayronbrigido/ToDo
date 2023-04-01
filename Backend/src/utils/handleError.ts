const httpStatus = require('http-status');
import {Request, Response} from 'express'
import BusinessError from "./businessError";
import UnauthorizedError from "./unauthorizedError";


export default function handleError(err: BusinessError | UnauthorizedError | Error, req: Request, res: Response): void {
    if (err instanceof BusinessError && err.isBusinessError) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: err.code as string,
        options: err.options
      })
    } else if (err instanceof UnauthorizedError && err.isUnauthorized) {
      res.sendStatus(httpStatus.UNAUTHORIZED).json;
    } else if (err) {
      res.sendStatus(httpStatus.BAD_REQUEST).json({
        error: err
      })
    }
  }