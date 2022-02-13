import { mongoose } from '../MondoDBAdapter/infra';
export interface IUser {
  id?: string;
  name: string;
  emailForNotification: string;
  service: 'nodemailer' | 'sendgrid';
  acess: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
    tls: {
      rejectUnauthorized: boolean;
    };
    apiKey?: string;
    emailFrom?: string;
  };
}

const UserEntity = {
  name: {
    type: String,
    required: true,
  },
  emailForNotification: {
    type: String,
    required: true,
    unique: true,
  },
  service: {
    type: String,
    required: true,
  },
  acess: {
    type: Object,
    required: true,
  },
};

export const User = mongoose.model('user', new mongoose.Schema(UserEntity));

const t = {
  name: 'email service',
  emailForNotification: 'service.tekio@gmail.com',
  service: 'nodemailer',
  acess: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: 'service.tekio@gmail.com',
      pass: 'tekio2011',
    },
    apiKey: 'string',
    emailFrom: 'string',
  },
};
