import { UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';

export class RemoveAccountServerUseCase implements UseCase<string, void> {
  constructor(private readonly repository: AccountRepository) {}

  async execute(id: string) {
    return this.repository.remove(id);
  }
}
