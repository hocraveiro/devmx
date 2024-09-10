import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationLikeRepository } from '../../../repositories';
import { PresentationLike } from '../../../entities';

export class UpdatePresentationLikeServerUseCase
  implements UseCase<Updatable<PresentationLike>, PresentationLike | null>
{
  constructor(private readonly repository: PresentationLikeRepository) {}

  async execute(data: Updatable<PresentationLike>) {
    return this.repository.update(data);
  }
}
