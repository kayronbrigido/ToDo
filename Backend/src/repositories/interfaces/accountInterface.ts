import { AccountEntity } from "../../entities/AccountEntity";

export interface IAccountRepository{
  create(account: AccountEntity): Promise<AccountEntity>
  getAccountByID(id: string): Promise<AccountEntity[]>
}