import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationRepository } from '../../../repositories';
import { Presentation } from '../../../entities';

export class FindOnePresentationServerUseCase
  implements UseCase<FindWhere<Presentation>, Presentation | null>
{
  constructor(private readonly repository: PresentationRepository) {}

  async execute(where: FindWhere<Presentation>) {
    return this.repository.findOne(where);
  }
}
