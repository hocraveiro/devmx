import { PresentationReactionRepository } from '../../../repositories';
import { UseCase } from '@devmx/shared-api-interfaces';

export class RemovePresentationReactionServerUseCase
  implements UseCase<string, void>
{
  constructor(private readonly repository: PresentationReactionRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
