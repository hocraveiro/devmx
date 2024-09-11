import { PresentationCommentRepository } from '../../../repositories';
import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationComment } from '../../../entities';

export class UpdatePresentationCommentServerUseCase
  implements
    UseCase<Updatable<PresentationComment>, PresentationComment | null>
{
  constructor(private readonly repository: PresentationCommentRepository) {}

  async execute(data: Updatable<PresentationComment>) {
    return this.repository.update(data);
  }
}
