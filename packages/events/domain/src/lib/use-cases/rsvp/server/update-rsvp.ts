import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPRepository } from '../../../repositories';
import { RSVP } from '../../../entities';

export class UpdateRSVPServerUseCase
  implements UseCase<Updatable<RSVP>, RSVP | null>
{
  constructor(private readonly repository: RSVPRepository) {}

  async execute(data: Updatable<RSVP>) {
    return this.repository.update(data);
  }
}
