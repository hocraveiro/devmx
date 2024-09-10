import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationLikeRepository } from '../../../repositories';
import { PresentationLike } from '../../../entities';

export class FindPresentationLikesServerUseCase
  implements UseCase<FindOptions<PresentationLike>, Page<PresentationLike>>
{
  constructor(private readonly repository: PresentationLikeRepository) {}

  async execute(
    options: FindOptions<PresentationLike>
  ): Promise<Page<PresentationLike>> {
    return this.repository.find(options);
  }
}
