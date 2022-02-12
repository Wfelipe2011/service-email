import { mongoose } from "../MondoDBAdapter/infra";

export interface IUser{
  name: string,
  email: string,
  cpf: string
}

const UserEntity = {
  name: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  }
};

export const User = mongoose.model(
  "user",
  new mongoose.Schema(UserEntity)
);
