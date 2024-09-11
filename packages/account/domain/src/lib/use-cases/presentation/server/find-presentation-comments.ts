import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationCommentRepository } from '../../../repositories';
import { PresentationComment } from '../../../entities';

export class FindPresentationCommentsServerUseCase
  implements
    UseCase<FindOptions<PresentationComment>, Page<PresentationComment>>
{
  constructor(private readonly repository: PresentationCommentRepository) {}

  async execute(
    options: FindOptions<PresentationComment>
  ): Promise<Page<PresentationComment>> {
    return this.repository.find(options);
  }
}
