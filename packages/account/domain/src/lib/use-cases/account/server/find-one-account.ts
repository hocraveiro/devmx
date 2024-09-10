import { FindWhere, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { Account } from '../../../entities';

export class FindOneAccountServerUseCase
  implements UseCase<FindWhere<Account>, Account | null>
{
  constructor(private readonly repository: AccountRepository) {}

  async execute(where: FindWhere<Account>) {
    return this.repository.findOne(where);
  }
}
