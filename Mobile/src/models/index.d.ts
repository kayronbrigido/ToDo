import { IConfigReducer } from "src/store/redux/config/type";


export interface ReduxState {
  auth: IAuthReducer,
  loading: ILoadingReducer,
  config: IConfigReducer
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