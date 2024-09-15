import {
  Account,
  Presentation,
  FindAccountsServerUseCase,
  CreateAccountServerUseCase,
  FindOneAccountServerUseCase,
  UpdateAccountServerUseCase,
  RemoveAccountServerUseCase,
  FindPresentationsServerUseCase,
  UpdateAccountPasswordServerUseCase,
} from '@devmx/account-domain';
import {
  Creatable,
  FindWhere,
  Updatable,
  FindOptions,
  AccountPassword,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { AccountDto } from '../dtos';

export class AccountFacade {
  constructor(
    private readonly createAccountUseCase: CreateAccountServerUseCase,
    private readonly findAccountsUseCase: FindAccountsServerUseCase,
    private readonly findOneAccountUseCase: FindOneAccountServerUseCase,
    private readonly updateAccountUseCase: UpdateAccountServerUseCase,
    private readonly removeAccountUseCase: RemoveAccountServerUseCase,
    private readonly findPresentationsUseCase: FindPresentationsServerUseCase,
    private readonly updateAccountPasswordUseCase: UpdateAccountPasswordServerUseCase
  ) {}

  async create(data: Creatable<Account>) {
    const account = await this.createAccountUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  async find(options: FindOptions<Account>) {
    const { meta, data } = await this.findAccountsUseCase.execute(options);
    return { meta, data: plainToInstance(AccountDto, data) };
  }

  async findPresentationsByAccount(options: FindOptions<Presentation>) {
    const { meta, data } = await this.findPresentationsUseCase.execute(options);
    return { meta, data: plainToInstance(AccountDto, data) };
  }

  async findOne(data: FindWhere<Account>) {
    const account = await this.findOneAccountUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  async update(data: Updatable<Account>) {
    const account = await this.updateAccountUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  async updatePassword(data: AccountPassword) {
    const account = await this.updateAccountPasswordUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  remove(id: string) {
    return this.removeAccountUseCase.execute(id);
  }
}
