import { TaskEntity } from "@src/entities/TaskEntity"

export interface ITaskService {
  create(task: TaskEntity, userId: string): Promise<TaskEntity>
  delete(id: string): Promise<void>
  update(task: TaskEntity, userId: string): Promise<TaskEntity>
  getById(id: string): Promise<TaskEntity>
  getAll(userId: string): Promise<TaskEntity[]>
}