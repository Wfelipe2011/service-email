import * as nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

import { ConfigEmailAdapter, EmailAdapter } from './email.adapter';

export class NodeMailerAdapter implements EmailAdapter {
  private readonly transport: nodemailer.Transporter<SentMessageInfo>;
  constructor(user,pass) {
    this.transport = nodemailer.createTransport({
      host: 'smtp.tipimail.com',
      port: 25,
      auth: {
        user: user,
        pass: pass,
      },
    });
  }

  public async send(configMsg: ConfigEmailAdapter): Promise<void> {
    configMsg.from = configMsg?.from 
    try {
      await this.transport.sendMail(configMsg);
      this.transport.close();
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }
}
