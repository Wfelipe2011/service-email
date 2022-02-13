import * as nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

import { ConfigEmailAdapter, EmailAdapter } from './email.adapter';

type ConfigNodeMailer = {
  host: string;
  secure: boolean;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
  tls: {
    rejectUnauthorized: boolean;
  };
};

export class NodeMailerAdapter implements EmailAdapter {
  private readonly transport: nodemailer.Transporter<SentMessageInfo>;
  constructor(configNodeMailer: ConfigNodeMailer) {
    this.transport = nodemailer.createTransport(configNodeMailer);
  }

  public async send(configMsg: ConfigEmailAdapter) {
    configMsg.from = configMsg?.from;

    this.transport.sendMail(configMsg, (error, info) => {
      if (error) {
        console.log('alert Erro Email => ' + JSON.stringify(error));
      } else {
        console.log(info);
      }
    });
    this.transport.close();
  }
}
