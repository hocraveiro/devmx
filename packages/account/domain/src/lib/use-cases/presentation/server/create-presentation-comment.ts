import { PresentationCommentRepository } from '../../../repositories';
import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationComment } from '../../../entities';

export class CreatePresentationCommentServerUseCase
  implements UseCase<Creatable<PresentationComment>, PresentationComment>
{
  constructor(private readonly repository: PresentationCommentRepository) {}

  async execute(data: Creatable<PresentationComment>) {
    return this.repository.create(data);
  }
}
