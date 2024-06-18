import { Controller, Get } from '@nestjs/common';
import { Partner1Service } from './partner1.service';

@Controller()
export class Partner1Controller {
  constructor(private readonly partner1Service: Partner1Service) {}

  @Get()
  getHello(): string {
    return this.partner1Service.getHello();
  }
}
