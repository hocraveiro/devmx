import { EventsController } from './controllers/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {
  dataSourceEventsEntities,
  dataSourceEventsProviders,
} from '@devmx/events-data-source';

@Module({
  controllers: [EventsController],
  imports: [TypeOrmModule.forFeature(dataSourceEventsEntities)],
  providers: [...dataSourceEventsProviders],
  exports: [],
})
export class EventsResourceModule {}
