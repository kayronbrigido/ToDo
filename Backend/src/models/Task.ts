import { TaskStatus } from "./enums"


export interface ITask {
  title: string
  status: TaskStatus
}