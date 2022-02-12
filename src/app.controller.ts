import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './database/entity/UserEntity';
import { MongoDBAdapter } from './database/MondoDBAdapter/MongoDBAdapter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  @Post()
  async create(){
    return this.appService.create()
  }
}
