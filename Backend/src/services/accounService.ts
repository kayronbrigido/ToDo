import { ILogin } from "@src/models";
import { IAccountService } from "./interfaces/accountService.interface";
import { TYPES } from "@src/models/TYPES";
import { inject, injectable } from "inversify";

import { AccountEntity } from "@src/entities/AccountEntity";
import { IAccountRepository } from "@src/repositories/interfaces/accountInterface";

@injectable()
export class AccountService implements IAccountService{
  private accountRepository: IAccountRepository

  constructor(
  @inject(TYPES.AccountRepository) accountRepository: IAccountRepository
  ){
  this.accountRepository = accountRepository;
  }

  createAccount(account: AccountEntity) {
    return this.accountRepository.create(account)
  }

  getAccount(login: ILogin) {
    throw new Error("Method not implemented.");
  }
  
}