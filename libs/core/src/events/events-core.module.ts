import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [EventsService],
  exports: [EventsService, PrismaService],
})
export class EventsCoreModule {}