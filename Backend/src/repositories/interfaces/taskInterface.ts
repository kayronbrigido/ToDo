import { TaskEntity } from "@src/entities/TaskEntity";

export interface ITaskRepository{
  create(task: TaskEntity): Promise<TaskEntity>
  delete(id: string): Promise<void>
  update(task: TaskEntity): Promise<TaskEntity>
  getById(id: string): Promise<TaskEntity>
  getAll(userId: string): Promise<TaskEntity[]>
}