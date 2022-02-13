import { Injectable } from '@nestjs/common';
import { EmailAdapter, ConfigEmailAdapter } from './adapter/email.adapter';
import { MongoDBAdapter } from '../database/MondoDBAdapter/MongoDBAdapter';
import { User } from 'src/database/entity/UserEntity';
import { NodeMailerAdapter } from './adapter/nodeMailer.adapter';
import { IUser } from '../database/entity/UserEntity';
@Injectable()
export class EmailService {
  emailAdapter: EmailAdapter;
  mongoDBAdapter: MongoDBAdapter;
  constructor() {
    this.mongoDBAdapter = new MongoDBAdapter(User);
  }

  public async notifyService(configEmailAdapter: ConfigEmailAdapter) {
    const { emailForNotification } = await this.factoryNodeMailer(
      process.env.SERVICE_TEKIO,
    );
    try {
      this.emailAdapter.send({
        ...configEmailAdapter,
        from: emailForNotification,
      });
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }

  async factoryNodeMailer(id: string) {
    const entity = await this.mongoDBAdapter.getOne<IUser>({ id });
    this.emailAdapter = new NodeMailerAdapter(entity.acess);
    return { emailForNotification: entity.emailForNotification };
  }
}
