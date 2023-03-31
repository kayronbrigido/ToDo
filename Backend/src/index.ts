import 'reflect-metadata';
import { Server } from './server'

class Application {

  constructor() {
    this.initialize()
  }

  async initialize(){
    new Server();
  }
}