import { UseCase } from '@devmx/shared-api-interfaces';
import { PresentationRepository } from '../../../repositories';

export class RemovePresentationServerUseCase implements UseCase<string, void> {
  constructor(private readonly repository: PresentationRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
