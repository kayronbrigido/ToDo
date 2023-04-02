export interface ILogin {
  username: string
  password: string
}

export interface IUser {
  username: string
  firstName: string
  lastName: string
  userId: string
}

export interface ITask {
  id?: string
  title: string
  description: string,
  status: number
}