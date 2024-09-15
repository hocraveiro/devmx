import { AccountPassword, UseCase } from '@devmx/shared-api-interfaces';
import { AccountService } from '../../../services';
import { Account } from '../../../entities';

export class UpdateAccountPasswordClientUseCase
  implements UseCase<AccountPassword, Account>
{
  constructor(private readonly service: AccountService) {}

  execute(data: AccountPassword) {
    return this.service.updatePassword(data);
  }
}
