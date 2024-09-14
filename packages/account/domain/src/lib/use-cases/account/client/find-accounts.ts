import { FindOptions, Page, UseCase } from '@devmx/shared-api-interfaces';
import { Account } from '../../../entities/account';
import { AccountService } from '../../../services';

export class FindAccountsClientUseCase
  implements UseCase<FindOptions<Account>, Page<Account>>
{
  constructor(private readonly service: AccountService) {}

  execute(options: FindOptions<Account>) {
    return this.service.find(options);
  }
}
