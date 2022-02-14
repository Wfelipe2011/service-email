import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, User } from './database/entity/UserEntity';
import { MongoDBAdapter } from './database/MondoDBAdapter/MongoDBAdapter';
import { EmailService } from './email/email.service';
import { inspect } from './decorate/inspect.decorate';
import { LoggerService } from './decorate/logger.decorate';

@Injectable()
export class AppService {
  private readonly mongoDBAdapter: MongoDBAdapter;
  constructor(private emailService: EmailService) {
    this.mongoDBAdapter = new MongoDBAdapter(User);
  }

  async create(user: IUser): Promise<void> {
    const response = await this.mongoDBAdapter.save(user);
    const message = this.getWelcomeMessage(user, response);
    return await this.emailService.notifyService(message);
  }

  private getWelcomeMessage(user: IUser, response: any) {
    return {
      to: user.emailForNotification,
      subject: 'Bem vindo',
      text: `Bem vindo ao serviço de envio de email. Utilize essa key: ${response._id} para enviar email utilizando as suas configurações.  `,
    };
  }

  @LoggerService()
  async getByKey({ emailForNotification }): Promise<string> {
    const response = await this.mongoDBAdapter.getOne<IUser>({
      emailForNotification,
    });
    if (!response)
      throw new NotFoundException(`Not found email: ${emailForNotification}`);
    const message = this.getRecoveryKeyMessage(response);
    await this.emailService.notifyService(message);
    return `Sua chave key foi enviada para o seu email: ${emailForNotification}`;
  }

  private getRecoveryKeyMessage(response: IUser): {
    to: string;
    subject: string;
    text: string;
  } {
    return {
      to: response.emailForNotification,
      subject: 'Acesso key',
      text: `Utilize essa key: ${response.id} para enviar email utilizando as suas configurações.`,
    };
  }

  // update

  async sendService(): Promise<string> {
    return 'Ainda vai ser implementado';
  }

  // notificar a operação

  // Criar decorate logger params
}
