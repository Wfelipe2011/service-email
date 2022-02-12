import { Injectable } from '@nestjs/common';
import { IUser, User } from './database/entity/UserEntity';
import { MongoDBAdapter } from './database/MondoDBAdapter/MongoDBAdapter';

@Injectable()
export class AppService {
  private readonly mongoDBAdapter: MongoDBAdapter;
  constructor() {
    this.mongoDBAdapter = new MongoDBAdapter(User);
  }

  async getHello() {
    return await this.mongoDBAdapter.getAll();
  }

  async create(user: IUser) {
     return await this.mongoDBAdapter.save(user);
    // notificar a pessoa pelo email passando id para futuras alterações
    // ter metodo para recuperar id passando email ?
  }
  // realizar o serviço a ela
  // notificar a operação
}
