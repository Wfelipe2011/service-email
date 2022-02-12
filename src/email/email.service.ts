import { Injectable } from '@nestjs/common';


@Injectable()
export class EmailService {
  emailAdapter: EmailAdapter;
  constructor() {
    this.emailAdapter = new SendGridAdapter('');
  }

  public async sendEmailFinancialAlterBankData() {
    try {
      const msg: ConfigEmailAdapter = {
        to: FINANCEIRO_EMAIL,
        from: EMAIL_ADM,
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
        to: EMAIL_SUPPORT,
        from: EMAIL_ADM,
        subject: title,
        text: message,
      };
      await this.emailAdapter.send(msg);
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }
}
