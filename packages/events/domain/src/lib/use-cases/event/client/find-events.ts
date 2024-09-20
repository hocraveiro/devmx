import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { Event } from '../../../entities/event';
import { EventService } from '../../../services';

export class FindEventsClientUseCase
  implements UseCase<FindOptions<Event>, Page<Event>>
{
  constructor(private readonly service: EventService) {}

  execute(options: FindOptions<Event>) {
    return this.service.find(options);
  }
}
