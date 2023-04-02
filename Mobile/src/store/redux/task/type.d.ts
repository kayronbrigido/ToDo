import { ITask, IUser } from "@src/models";


export interface ITaskReducer {
  allTask: ITask[] | null
  selectedTask: ITask | null
}