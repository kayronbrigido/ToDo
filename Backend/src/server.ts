import 'reflect-metadata';
import './controllers'
import { Container } from "inversify";
import { InversifyExpressServer } from 'inversify-express-utils';
import { NextFunction, Response, Request } from 'express';
import * as bodyParser from 'body-parser'
import * as compress from 'compression'
import * as cors from 'cors'
import helmet from 'helmet';
import httpStatus from 'http-status';

const container: Container = new Container();

const handleError = (err, req, res) => {}

export class Server {

  constructor(){
    this.createServer();
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
}

export default new Server();