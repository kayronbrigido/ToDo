import { IUser } from "@src/models";


export interface IAccountReducer {
  me: IUser | null
  createAccount: ICreateAccount | null
}