import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { RSVPRepository } from '../../../repositories';
import { RSVP } from '../../../entities';

export class FindRSVPSServerUseCase
  implements UseCase<FindOptions<RSVP>, Page<RSVP>>
{
  constructor(private readonly repository: RSVPRepository) {}

  async execute(options: FindOptions<RSVP>): Promise<Page<RSVP>> {
    return this.repository.find(options);
  }
}
