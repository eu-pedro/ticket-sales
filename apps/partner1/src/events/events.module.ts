import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from '@app/core/events/events.service';
import { EventsCoreModule } from '@app/core/events/events-core.module';

@Module({
  imports: [EventsCoreModule],
  controllers: [EventsController],
})
export class EventsModule {}