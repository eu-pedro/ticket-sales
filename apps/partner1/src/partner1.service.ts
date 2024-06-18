import { Injectable } from '@nestjs/common';

@Injectable()
export class Partner1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
