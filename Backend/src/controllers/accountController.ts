import 'reflect-metadata';
import { Request, Response } from "express";
import { httpGet, BaseHttpController, interfaces, controller, httpPost } from "inversify-express-utils";
import { IAccountService } from '@src/services/interfaces/accountService.interface';
import { inject } from 'inversify';
import { TYPES } from '@src/models/TYPES';


@controller('/account')
export class AccountController extends BaseHttpController implements interfaces.Controller {
  private accountService: IAccountService;

  constructor(
    @inject(TYPES.AccountService) accountService: IAccountService
  ) {
    super();
    this.accountService = accountService

  }

  @httpPost("/login")
  private login(req: Request) {
    return this.accountService.getAccount(req.body)
  }

  @httpPost("/")
  private createAccount(req: Request) {
    return this.accountService.createAccount(req.body)
  }

  @httpGet("/")
  private getAccount(req: Request): string {
    return 'Hello World'
  }
}