import { IUser } from "./User";


export interface IAccount extends IUser {
  password: string
}