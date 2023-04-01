import { JWT_KEY } from "@src/configs/constants";
import { IUser } from "@src/models";
import UnauthorizedError from "@src/utils/unauthorizedError";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

async function auth(
  req: Request
  res: Response,
  next: NextFunction): Promise<void> {
    
    if(!req.headers || req!.headers.authorization) {
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

    const decode: IUser = jwt.verify(token, JWT_KEY) as IUser

    req.session = {
      ...decode
    }

    return next();
    
  }

  export default auth