import 'reflect-metadata';
import { Server } from '@src/server'

class Application {

  constructor() {
    this.initialize()
  }

  async initialize(){
    new Server();
  }
}