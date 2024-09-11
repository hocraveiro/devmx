import { PresentationCommentRepository } from '../../../repositories';
import { UseCase } from '@devmx/shared-api-interfaces';

export class RemovePresentationCommentServerUseCase
  implements UseCase<string, void>
{
  constructor(private readonly repository: PresentationCommentRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
