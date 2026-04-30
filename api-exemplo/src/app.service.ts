import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Essa é uma API de estudos usando NestJS!';
  }
}
