import { Injectable } from '@nestjs/common';
import { EmailAdapter, ConfigEmailAdapter } from './adapter/email.adapter';
import { SendGridAdapter } from './adapter/sendGrid-email.adapter';
@Injectable()
export class EmailService {
  emailAdapter: EmailAdapter;
  constructor() {
    this.emailAdapter = new SendGridAdapter('');
  }

  public async sendEmailFinancialAlterBankData() {
    try {
      const msg: ConfigEmailAdapter = {
        to: '',
        from: '',
        subject: '',
        html: '',
      };
      await this.emailAdapter.send(msg);
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }

  public async sendEmailFeedback({ title, message }) {
    try {
      const msg: ConfigEmailAdapter = {
        to: '',
        from: '',
        subject: title,
        text: message,
      };
      await this.emailAdapter.send(msg);
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }
}
