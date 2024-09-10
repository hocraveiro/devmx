import { EventsController } from './controllers/events.controller';
import { RSVPsController } from './controllers/rsvps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {
  dataSourceEventsEntities,
  dataSourceEventsProviders,
} from '@devmx/events-data-source';

@Module({
  controllers: [EventsController, RSVPsController],
  imports: [TypeOrmModule.forFeature(dataSourceEventsEntities)],
  providers: [...dataSourceEventsProviders],
  exports: [],
})
export class EventsResourceModule {}
