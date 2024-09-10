import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { Account } from '../../../entities';

export class UpdateAccountServerUseCase
  implements UseCase<Updatable<Account>, Account | null>
{
  constructor(private readonly repository: AccountRepository) {}

  async execute(data: Updatable<Account>) {
    return this.repository.update(data);
  }
}
