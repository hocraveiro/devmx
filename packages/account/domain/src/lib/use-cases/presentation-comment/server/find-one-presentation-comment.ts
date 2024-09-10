import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationCommentRepository } from '../../../repositories';
import { PresentationComment } from '../../../entities';

export class FindOnePresentationCommentServerUseCase
  implements
    UseCase<FindWhere<PresentationComment>, PresentationComment | null>
{
  constructor(private readonly repository: PresentationCommentRepository) {}

  async execute(where: FindWhere<PresentationComment>) {
    return this.repository.findOne(where);
  }
}
