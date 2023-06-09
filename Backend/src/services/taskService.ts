
import { TYPES } from "@src/models/TYPES";
import { inject, injectable } from "inversify";


import { ITaskRepository } from "@src/repositories/interfaces/taskInterface";
import { TaskEntity } from "@src/entities/TaskEntity";
import { ITaskService } from "./interfaces/taskService.interface";
import * as uuid from 'uuid'
import BusinessError, { ErrorCodes } from "@src/utils/businessError";

@injectable()
export class TaskService implements ITaskService {
  private taskRepository: ITaskRepository

  constructor(
    @inject(TYPES.TaskRepository) taskRepository: ITaskRepository
  ) {
    this.taskRepository = taskRepository;
  }
  
  async create(task: TaskEntity, userId: string): Promise<TaskEntity> {
    return this.taskRepository.create(task, userId);
  }

  async delete(id: string): Promise<void> {
    return this.taskRepository.delete(id);
  }

  async update(task: TaskEntity,  userId: string): Promise<TaskEntity> {
    return this.taskRepository.update(task, userId)
  }

  async getById(id: string): Promise<TaskEntity> {

    const isValid = uuid.validate(id);

    if(!isValid) {
      throw new BusinessError(ErrorCodes.INVALID_ID)
    }


    return this.taskRepository.getById(id);
  }

  async getAll(userId: string): Promise<TaskEntity[]> {
    return this.taskRepository.getAll(userId);
  }



}