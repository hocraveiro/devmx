import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationRepository } from '../../../repositories';
import { Presentation } from '../../../entities';

export class UpdatePresentationServerUseCase
  implements UseCase<Updatable<Presentation>, Presentation | null>
{
  constructor(private readonly repository: PresentationRepository) {}

  async execute(data: Updatable<Presentation>) {
    return this.repository.update(data);
  }
}
