import { Role, SignUp, UseCase } from '@devmx/shared-api-interfaces';
import { AccountRepository } from '../../../repositories';
import { CryptoService } from '../../../services';
import { Account } from '../../../entities';

export class SignUpServerUseCase implements UseCase<SignUp, Account> {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly cryptoService: CryptoService
  ) {}

  async execute(data: SignUp) {
    const where = { username: data.username };
    let account = await this.accountRepository.findOne(where);

    if (account) {
      throw new Error('Usuário já existe');
    }

    const password = this.cryptoService.hash(data.password);
    const roles: Role[] = ['member'];
    const value = { ...data, active: false, password, roles };
    account = await this.accountRepository.create(value);

    return account;
  }
}
