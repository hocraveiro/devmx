import { Updatable, UseCase } from '@devmx/shared-api-interfaces';
import { Account } from '../../../entities';
import { AccountService } from '../../../services';

export class UpdateAccountClientUseCase
  implements UseCase<Updatable<Account>, Account>
{
  constructor(private readonly service: AccountService) {}

  execute(data: Updatable<Account>) {
    return this.service.update(data);
  }
}
