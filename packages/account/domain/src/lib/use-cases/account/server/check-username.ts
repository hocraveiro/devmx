import { CheckUsername, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';

export class CheckUsernameServerUseCase
  implements UseCase<CheckUsername, null>
{
  constructor(private readonly repository: AccountRepository) {}

  async execute(data: CheckUsername) {
    const where = { username: data.username };
    const account = await this.repository.findOne(where);

    if (account) {
      throw new Error('Usuário já existe');
    }

    return null;
  }
}
