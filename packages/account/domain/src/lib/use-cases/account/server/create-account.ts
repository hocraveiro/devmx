import { Creatable, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { Account } from '../../../entities';

export class CreateAccountServerUseCase
  implements UseCase<Creatable<Account>, Account>
{
  constructor(private readonly repository: AccountRepository) {}

  async execute(data: Creatable<Account>) {
    return this.repository.create(data);
  }
}
