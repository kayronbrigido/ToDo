import { injectable } from 'inversify'

import { AppDataSource } from '@src/configs/database';
import { DeleteResult, Repository } from 'typeorm';
import { ITaskRepository } from './interfaces/taskInterface';
import { TaskEntity } from '@src/entities/TaskEntity';

@injectable()
export class TaskRepository implements ITaskRepository {
  private taskRepository: Repository<TaskEntity> = AppDataSource.getRepository(TaskEntity)
  
  async create(task: TaskEntity): Promise<TaskEntity> {
    return this.taskRepository.save(task);
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
    return this.taskRepository.findOne({where: {id }})
  }

  getAll(userId: string): Promise<TaskEntity[]> {
    return this.taskRepository.findBy({ account: { id: userId}})
  }


}