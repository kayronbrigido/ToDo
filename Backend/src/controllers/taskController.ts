import 'reflect-metadata';
import { Request, Response } from "express";
import { httpGet, BaseHttpController, interfaces, controller, httpPost, httpPut } from "inversify-express-utils";
import { inject } from 'inversify';
import { TYPES } from '@src/models/TYPES';
import { ITaskService } from '@src/services/interfaces/taskService.interface';
import { TaskEntity } from '@src/entities/TaskEntity';
import auth from './middlewares/auth';


@controller('/task')
export class TaskController extends BaseHttpController implements interfaces.Controller {
  private taskService: ITaskService;

  constructor(
    @inject(TYPES.TaskService) taskService: ITaskService
  ) {
    super();
    this.taskService = taskService

  }

  @httpGet("/id", auth)
  private getTaskById(req: Request): Promise<TaskEntity>{

    return this.taskService.getById(req.query.id as string);
  }

  @httpGet("/", auth)
  private getAllTask(req: Request): Promise<TaskEntity[]>{
  
    return this.taskService.getAll(req.session.user.userId);
  }

  @httpPost("/delete", auth)
  private deleteTask(req: Request): Promise<void>{
    return this.taskService.delete(req.body.id as string);
  }

  @httpPut("/", auth)
  private updateTask(req: Request): Promise<TaskEntity>{
    const userId = req.session.user.userId

    return this.taskService.update(req.body as TaskEntity, userId);
  }

  

  @httpPost("/", auth)
  private createTask(req: Request): Promise<TaskEntity>{
    const userId = req.session.user.userId

    return this.taskService.create(req.body as TaskEntity, userId)
  }

}