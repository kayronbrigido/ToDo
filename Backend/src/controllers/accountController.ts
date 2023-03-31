import 'reflect-metadata';
import { Request, Response } from "express";
import { httpGet, BaseHttpController, interfaces, controller } from "inversify-express-utils";



@controller('/account')
export class AccountController extends BaseHttpController implements interfaces.Controller {

  @httpGet("/")
  private getAccount(req: Request) {
    return 'Hello World';
  }
}