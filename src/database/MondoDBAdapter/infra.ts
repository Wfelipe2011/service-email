import * as mongoose from "mongoose";
export { mongoose };

const connectionCloud = `mongodb+srv://Wilson:${process.env.PASSWORD_DATABASE}@cluster0.d07wk.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
const connectionLocal = `mongodb://localhost/${process.env.DATABASE}`;
const connectionConfig =
  process.env.NODE_ENV == "production" ? connectionCloud : connectionLocal;

  export class MongoDBConect {
  static async startMongo() {
    await mongoose.connect(connectionCloud)
      .then(() => {
        console.log("Conectado ao Banco MongoDB");
      })
      .catch((error) => {
        console.log(`${error}: Erro ao conectar!`);
      });
  }
}
