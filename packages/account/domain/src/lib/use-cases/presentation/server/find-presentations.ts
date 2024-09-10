import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationRepository } from '../../../repositories';
import { Presentation } from '../../../entities';

export class FindPresentationsServerUseCase
  implements UseCase<FindOptions<Presentation>, Page<Presentation>>
{
  constructor(private readonly repository: PresentationRepository) {}

  async execute(
    options: FindOptions<Presentation>
  ): Promise<Page<Presentation>> {
    return this.repository.find(options);
  }
}
