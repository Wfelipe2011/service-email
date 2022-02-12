# Módulo MongoDB Adapter

## Descrição

[Mongoose](https://www.npmjs.com/package/mongoose)

- Um módulo que utiliza mongoose para utilizar o banco mongoDB.

## Instalação

```bash
  npm i mongoose
```

## Como utilizar o modulo

- Conectando ao Banco Mongo

```ts
import * as mongoose from "mongoose";

export class MongoDBConect {
  static async startMongo() {
    await mongoose
      .connect("mongodb://localhost/my_database", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Conectado ao Banco MongoDB");
      })
      .catch((error) => {
        console.log(`${error}: Erro ao conectar!`);
      });
  }
}

export { mongoose };

// colocar no arquivo index.ts para conectar no inicio do servidor
await MongoDBConect.startMongo();
```

- Criar um Schema

```ts
const UsuarioEntity = {
  name: {
    type: String,
    required: true,
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
  },
};

export const Usuarios = mongoose.model(
  "formularios",
  new mongoose.Schema(UsuarioEntity)
);
```

- Utilizar Adapter para operações Crud

```ts
import { Usuarios } from "...";
import { MongoDBAdapter } from "...";

export class AppService {
  mongoAdapter: MongoDBAdapter;
  constructor() {
    this.mongoAdapter = new MongoDBAdapter(Usuarios);
  }

  async getAll() {
    return await this.mongoAdapter.getAll();
  }

  async getOne(id: any) {
    id = { name: "wilson" }; // { _id: "123654789" } pode ser feito diferentes tipos de filtros
    return await this.mongoAdapter.getOne(id); //.select(['name', 'email']) trazer os dados selecionados
  }

  async put(id: string, obj: any) {
    id = "61cf00a6c7c2a2b3dfbee504";
    obj = { name: "wilson" };
    return await this.mongoAdapter.update("61cf00a6c7c2a2b3dfbee504", obj);
  }

  async post(obj: any) {
    obj = {
      name: "wilson",
      email: "wfelipe2011@gmail.com",
      cpf: "00000001",
    };
    return await this.mongoAdapter.save(obj);
  }

  async delete(id) {
    id = "61cf00a6c7c2a2b3dfbee504";
    return await this.mongoAdapter.delete(id);
  }
}
```

### Utilizando Mongo local

- Seguir os passos da documentação:
  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Contato

- Author - Wilson Felipe <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" width="15" alt="github icone" />
  Github
  </a>
  <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/256px-Linkedin_icon.svg.png" width="15" alt="Linkedin icone" />
  Linkedin
  </a>

## License

[MIT licensed](LICENSE).
