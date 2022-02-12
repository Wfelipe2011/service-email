import { MailService } from '@sendgrid/mail';
import { EmailAdapter, ConfigEmailAdapter } from './email.adapter';

export class SendGridAdapter implements EmailAdapter {
  private readonly sendGrid: MailService;
  constructor(private apiKey) {
    this.sendGrid = new MailService();
    this.sendGrid.setApiKey(apiKey);
  }

  public async send(configMsg: ConfigEmailAdapter): Promise<void> {
    configMsg.from = configMsg?.from
    try {
      await this.sendGrid.send(configMsg as any);
    } catch (error) {
      console.log('alert Erro Email => ' + JSON.stringify(error));
    }
  }

}
