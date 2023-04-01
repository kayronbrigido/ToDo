import { JWT_KEY } from "@src/configs/constants";
import { IUser } from "@src/models";
import handleError from "@src/utils/handleError";
import UnauthorizedError from "@src/utils/unauthorizedError";
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';

declare module "express-session" {
  interface Session {
    user: IUser;
  }
}

async function auth(
  req: Request,
  res: Response,
  next: NextFunction): Promise<void> {
    try{
    if(!req.headers || !req.headers.authorization) {
      throw new UnauthorizedError();
    }

    let token: string = null;
    const parts: string[] = req.headers.authorization.split(' ');

    if(parts.length === 2 && /^Bearer$/i.test(parts[0])){
      [ , token ] = parts;
    }

    if(!token) {
      throw new UnauthorizedError();
    }

    const decode: IUser = jwt.verify(token, JWT_KEY) as IUser;

    req.session.user = decode

    return next();
  } catch(e) {
    return handleError(new UnauthorizedError(), req, res)
  }

  }

  export default auth;