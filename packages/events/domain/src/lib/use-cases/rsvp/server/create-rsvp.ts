import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPRepository } from '../../../repositories';
import { RSVP } from '../../../entities';

export class CreateRSVPServerUseCase implements UseCase<Creatable<RSVP>, RSVP> {
  constructor(private readonly repository: RSVPRepository) {}

  async execute(data: Creatable<RSVP>) {
    return this.repository.create(data);
  }
}
