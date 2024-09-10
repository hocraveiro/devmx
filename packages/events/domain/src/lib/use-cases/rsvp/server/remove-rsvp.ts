import { UseCase } from '@devmx/shared-api-interfaces';
import { RSVPRepository } from '../../../repositories';

export class RemoveRSVPServerUseCase implements UseCase<string, void> {
  constructor(private readonly repository: RSVPRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
