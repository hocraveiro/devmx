import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationLikeRepository } from '../../../repositories';
import { PresentationLike } from '../../../entities';

export class CreatePresentationLikeServerUseCase
  implements UseCase<Creatable<PresentationLike>, PresentationLike>
{
  constructor(private readonly repository: PresentationLikeRepository) {}

  async execute(data: Creatable<PresentationLike>) {
    return this.repository.create(data);
  }
}
