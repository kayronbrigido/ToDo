import { AccountEntity } from "@src/entities/AccountEntity";
import { ILogin } from "@src/models";


export interface IAccountService {
  createAccount(account: AccountEntity);
  getAccount(login: ILogin);
}