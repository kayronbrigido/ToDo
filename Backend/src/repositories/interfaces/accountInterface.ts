import { AccountEntity } from "../../entities/AccountEntity";

export interface IAccountRepository{
  create(account: AccountEntity): Promise<AccountEntity>
  getAccountByUsername(username: string): Promise<AccountEntity>
}