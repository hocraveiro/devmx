import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationReactionRepository } from '../../../repositories';
import { PresentationReaction } from '../../../entities';

export class FindPresentationReactionsServerUseCase
  implements UseCase<FindOptions<PresentationReaction>, Page<PresentationReaction>>
{
  constructor(private readonly repository: PresentationReactionRepository) {}

  async execute(
    options: FindOptions<PresentationReaction>
  ): Promise<Page<PresentationReaction>> {
    return this.repository.find(options);
  }
}
