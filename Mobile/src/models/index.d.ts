import { ITaskReducer } from "@src/store/redux/task/type";
import { IConfigReducer } from "src/store/redux/config/type";


export interface ReduxState {
  auth: IAuthReducer,
  config: IConfigReducer,
  task: ITaskReducer
}


export interface IUser {
  username: string
  firstName: string
  lastName: string
  userId: string
}

export interface ICreateAccount {
  username: string
  firstName: string
  lastName: string
  password: string
}

export interface ILogin {
  username: string
  password: string
}

export interface ITask {
  id: string
  title: string,
  description: string,
  status: number
}

export interface ICreateTask {
  title: string,
  description: string,
  status: number
}