import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './database/entity/UserEntity';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users/:email')
  async getByKey(@Param() { email }: { email: string }) {
    return this.appService.getByKey({ emailForNotification: email });
  }

  @Post('users')
  async create(@Body() user: IUser) {
    return this.appService.create(user);
  }

  @Post('send')
  async send() {
    return this.appService.sendService();
  }
}
