import { PresentationReactionRepository } from '../../../repositories';
import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationReaction } from '../../../entities';

export class FindOnePresentationReactionServerUseCase
  implements
    UseCase<FindWhere<PresentationReaction>, PresentationReaction | null>
{
  constructor(private readonly repository: PresentationReactionRepository) {}

  async execute(where: FindWhere<PresentationReaction>) {
    return this.repository.findOne(where);
  }
}
