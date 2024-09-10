import { UseCase } from '@devmx/shared-api-interfaces';
import { EventRepository } from '../../../repositories';

export class RemoveEventServerUseCase implements UseCase<string, void> {
  constructor(private readonly repository: EventRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
