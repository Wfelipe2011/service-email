import { mongoose } from '../MondoDBAdapter/infra';

export interface IUser {
  name: string;
  emailForNotification: string;
  service: 'nodemail' | 'sendgrid';
  acess: {
    host: string;
    port: number;
    auth: {
      user: string;
      pass: string;
    };
    apiKey: string;
    emailFrom: string;
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
