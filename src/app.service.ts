import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  create(){
    // registrar uma pessoa
    // nome
    // email
    // dados acesso para conta email
  }
    // realizar o serviço a ela
    // notificar a operação
}
