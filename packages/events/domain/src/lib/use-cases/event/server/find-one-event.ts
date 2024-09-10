import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { EventRepository } from '../../../repositories';
import { Event } from '../../../entities';

export class FindOneEventServerUseCase
  implements UseCase<FindWhere<Event>, Event | null>
{
  constructor(private readonly repository: EventRepository) {}

  async execute(where: FindWhere<Event>) {
    return this.repository.findOne(where);
  }
}
