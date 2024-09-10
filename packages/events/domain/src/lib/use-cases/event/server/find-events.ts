import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { EventRepository } from '../../../repositories';
import { Event } from '../../../entities';

export class FindEventsServerUseCase
  implements UseCase<FindOptions<Event>, Page<Event>>
{
  constructor(private readonly repository: EventRepository) {}

  async execute(options: FindOptions<Event>): Promise<Page<Event>> {
    return this.repository.find(options);
  }
}
