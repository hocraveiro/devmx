import { PresentationReactionRepository } from '../../../repositories';
import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationReaction } from '../../../entities';

export class CountPresentationReactionsServerUseCase
  implements UseCase<FindWhere<PresentationReaction>, number>
{
  constructor(private readonly repository: PresentationReactionRepository) {}

  async execute(options: FindWhere<PresentationReaction>) {
    return this.repository.count(options);
  }
}
