import { AccountPassword, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { CryptoService } from '../../../services';
import { Account } from '../../../entities';

export class UpdateAccountPasswordServerUseCase
  implements UseCase<AccountPassword, Account | null>
{
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly cryptoService: CryptoService
  ) {}

  async execute({ id, currentPassword, newPassword }: AccountPassword) {
    const account = await this.accountRepository.findOne({ id });

    if (!account) {
      throw new Error('Senha inválida');
    }

    const isValidPassword = this.cryptoService.compare(
      currentPassword,
      account.password
    );

    if (!isValidPassword) {
      throw new Error('Senha inválida');
    }

    account.password = this.cryptoService.hash(newPassword);

    return this.accountRepository.update(account);
  }
}
