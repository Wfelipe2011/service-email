require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoDBConect } from './database/MondoDBAdapter/infra';

async function bootstrap() {
  await MongoDBConect.startMongo()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
