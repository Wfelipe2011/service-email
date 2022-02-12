import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './database/entity/UserEntity';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return this.appService.getHello();
  }

  @Post()
  async create(@Body() user: IUser) {
    return this.appService.create(user);
  }
}
