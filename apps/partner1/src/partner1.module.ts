import { Module } from '@nestjs/common';
import { Partner1Controller } from './partner1.controller';
import { Partner1Service } from './partner1.service';

@Module({
  imports: [],
  controllers: [Partner1Controller],
  providers: [Partner1Service],
})
export class Partner1Module {}
