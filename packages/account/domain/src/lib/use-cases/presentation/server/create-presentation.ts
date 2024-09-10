import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationRepository } from '../../../repositories';
import { Presentation } from '../../../entities';

export class CreatePresentationServerUseCase
  implements UseCase<Creatable<Presentation>, Presentation>
{
  constructor(private readonly repository: PresentationRepository) {}

  async execute(data: Creatable<Presentation>) {
    return this.repository.create(data);
  }
}
