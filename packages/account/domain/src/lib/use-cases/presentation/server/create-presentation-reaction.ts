import { PresentationReactionRepository } from '../../../repositories';
import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationReaction } from '../../../entities';

export class CreatePresentationReactionServerUseCase
  implements UseCase<Creatable<PresentationReaction>, PresentationReaction>
{
  constructor(private readonly repository: PresentationReactionRepository) {}

  async execute(data: Creatable<PresentationReaction>) {
    return this.repository.create(data);
  }
}
