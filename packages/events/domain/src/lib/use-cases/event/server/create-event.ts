import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { EventRepository } from '../../../repositories';
import { Event } from '../../../entities';

export class CreateEventServerUseCase
  implements UseCase<Creatable<Event>, Event>
{
  constructor(private readonly repository: EventRepository) {}

  async execute(data: Creatable<Event>) {
    return this.repository.create(data);
  }
}
