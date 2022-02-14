require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoDBConect } from './database/MondoDBAdapter/infra';
import { skyotLogger} from './logger/SkyotLoggerPino';
import pinoHttp from 'pino-http';

async function bootstrap() {
  await MongoDBConect.startMongo();
  const app = await NestFactory.create(AppModule);
  // app.use(pinoHttp({ logger: LoggerPino }));
  app.listen(process.env.PORT, () => {
    skyotLogger(`Servidor está rodando na porta: ${process.env.PORT}`);
    });
}
bootstrap();
