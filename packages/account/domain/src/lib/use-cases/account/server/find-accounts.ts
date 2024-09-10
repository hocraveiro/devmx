import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { Account } from '../../../entities';

export class FindAccountsServerUseCase
  implements UseCase<FindOptions<Account>, Page<Account>>
{
  constructor(private readonly repository: AccountRepository) {}

  async execute(options: FindOptions<Account>): Promise<Page<Account>> {
    return this.repository.find(options);
  }
}
