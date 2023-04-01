import 'reflect-metadata';
import './controllers'
import { Container } from "inversify";
import { InversifyExpressServer } from 'inversify-express-utils';
import { NextFunction, Response, Request } from 'express';
import * as bodyParser from 'body-parser'
import * as compress from 'compression'
import * as cors from 'cors'
import helmet from 'helmet';

import { IAccountService } from './services/interfaces/accountService.interface';
import { TYPES } from './models/TYPES';
import { AccountService } from './services/accountService';

import { AccountRepository } from './repositories/accountRepository';

import { AppDataSource } from './configs/database';
import { IAccountRepository } from './repositories/interfaces/accountInterface';
import BusinessError from './utils/businessError';
import UnauthorizedError from './utils/unauthorizedError';
import { TaskService } from './services/taskService';
import { ITaskRepository } from './repositories/interfaces/taskInterface';
import { TaskRepository } from './repositories/taskRepository';
import { ITaskService } from './services/interfaces/taskService.interface';
import * as session from 'express-session';


const httpStatus = require('http-status');

const container: Container = new Container();

const handleError:
  (err: BusinessError | UnauthorizedError, req: Request, res: Response) => void =
  (err: BusinessError | UnauthorizedError, req: Request, res: Response): void => {
    if (err instanceof BusinessError && err.isBusinessError) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: err.code as string,
        options: err.options
      })
    } else if (err instanceof UnauthorizedError && err.isUnauthorized) {
      res.status(httpStatus.UNAUTHORIZED).json;
    }
  }

export class Server {

  constructor() {
    this.initializeDataSource();
    this.configDependecies();
    this.createServer();
  }

  configDependecies(): void {

    container.bind<IAccountService>(TYPES.AccountService).to(AccountService)

    container.bind<IAccountRepository>(TYPES.AccountRepository).to(AccountRepository)

    container.bind<ITaskService>(TYPES.TaskService).to(TaskService)

    container.bind<ITaskRepository>(TYPES.TaskRepository).to(TaskRepository)
  }

  createServer() {

    const server: InversifyExpressServer = new InversifyExpressServer(container);

    server.setConfig((app: any): void => {
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(bodyParser.json())
      app.use(compress());
      app.use(cors());
      app.use(helmet());
      app.use(session({
        secret: 'express-secret',
        saveUninitialized: false,
        resave: false,
        store: new session.MemoryStore()
      }))
    });

    server.setErrorConfig((app: any): void => {

      app.use((_req: Request, res: Response): void => {
        res.status(httpStatus.NOT_FOUND).json();
      })

      app.use((err: any, req: Request, res: Response, _next: NextFunction): void => {
        return handleError(err, req, res)
      })

    })

    const app: any = server.build();
    app.listen(2525, () => console.log(`App running on http:localhost:2525`))
  }

  async initializeDataSource() {
    await AppDataSource.initialize();
  }
}

export default new Server();