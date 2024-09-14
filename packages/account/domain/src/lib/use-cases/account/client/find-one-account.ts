import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { AccountService } from '../../../services';
import { Account } from '../../../entities';

export class FindOneAccountClientUseCase
  implements UseCase<FindWhere<Account>, Account | null>
{
  constructor(private readonly service: AccountService) {}

  execute(where: FindWhere<Account>) {
    return this.service.findOne(where);
  }
}
