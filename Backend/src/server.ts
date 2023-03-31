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
import { AccountService } from './services/accounService';

import { AccountRepository } from './repositories/accountRepository';

import { AppDataSource } from './configs/database';
import { IAccountRepository } from './repositories/interfaces/accountInterface';

const httpStatus = require('http-status');

const container: Container = new Container();

const handleError = (err, req, res) => {

}

export class Server {

  constructor(){
    this.initializeDataSource();
    this.configDependecies();
    this.createServer();
  }

  configDependecies(): void {

    container.bind<IAccountService>(TYPES.AccountService).to(AccountService)

    container.bind<IAccountRepository>(TYPES.AccountRepository).to(AccountRepository)
  }

  createServer() {

    const server: InversifyExpressServer = new InversifyExpressServer(container);

    server.setConfig((app: any): void => {
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(bodyParser.json())
      app.use(compress());
      app.use(cors());
      app.use(helmet());
    });

    server.setErrorConfig((app: any): void => {

      app.use((_req: Request, res: Response): void => {
        res.status(httpStatus.NOT_FOUND).json();
      })

      app.use((err: any, req: Request, res: Response, _next: NextFunction): void => {
        return handleError(err, req ,res)
      })

    })

    const app: any = server.build();
    app.listen(2525, () => console.log(`App running on http:localhost:2525`))
  }

  async initializeDataSource(){
    await AppDataSource.initialize();
  }
}

export default new Server();