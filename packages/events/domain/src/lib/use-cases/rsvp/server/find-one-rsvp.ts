import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPRepository } from '../../../repositories';
import { RSVP } from '../../../entities';

export class FindOneRSVPServerUseCase
  implements UseCase<FindWhere<RSVP>, RSVP | null>
{
  constructor(private readonly repository: RSVPRepository) {}

  async execute(where: FindWhere<RSVP>) {
    return this.repository.findOne(where);
  }
}
