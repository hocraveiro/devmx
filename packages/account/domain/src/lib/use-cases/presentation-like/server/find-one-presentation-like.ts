import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationLikeRepository } from '../../../repositories';
import { PresentationLike } from '../../../entities';

export class FindOnePresentationLikeServerUseCase
  implements UseCase<FindWhere<PresentationLike>, PresentationLike | null>
{
  constructor(private readonly repository: PresentationLikeRepository) {}

  async execute(where: FindWhere<PresentationLike>) {
    return this.repository.findOne(where);
  }
}
