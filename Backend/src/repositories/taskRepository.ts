import { injectable } from 'inversify'

import { AppDataSource } from '@src/configs/database';
import { Repository } from 'typeorm';
import { ITaskRepository } from './interfaces/taskInterface';
import { TaskEntity } from '@src/entities/TaskEntity';

@injectable()
export class TaskRepository implements ITaskRepository {
  private taskRepository: Repository<TaskEntity> = AppDataSource.getRepository(TaskEntity)
  
  async create(task: TaskEntity, userId: string): Promise<TaskEntity> {
      const payload: TaskEntity = { 
        ...task,
        account: { id: userId }
      }

      return this.taskRepository.save(payload);
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.softDelete({id});

    return 
  }

  async update(task: TaskEntity): Promise<TaskEntity> {
    await this.taskRepository.save(task)

    return
  }

  async getById(id: string): Promise<TaskEntity> {

    return await this.taskRepository.findOneBy({id})
  }

  async getAll(userId: string): Promise<TaskEntity[]> {
    return this.taskRepository.findBy({ account: { id: userId}})
  }


}