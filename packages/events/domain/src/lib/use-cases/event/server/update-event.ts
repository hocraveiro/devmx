import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { EventRepository } from '../../../repositories';
import { Event } from '../../../entities';

export class UpdateEventServerUseCase
  implements UseCase<Updatable<Event>, Event | null>
{
  constructor(private readonly repository: EventRepository) {}

  async execute(data: Updatable<Event>) {
    return this.repository.update(data);
  }
}
