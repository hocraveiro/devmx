import { UseCase } from '@devmx/shared-api-interfaces';
import { PresentationLikeRepository } from '../../../repositories';

export class RemovePresentationLikeServerUseCase
  implements UseCase<string, void>
{
  constructor(private readonly repository: PresentationLikeRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
