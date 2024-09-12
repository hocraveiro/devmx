import { AccountRepositoryImpl } from '../../repositories';
import { AccountRepository } from '@devmx/account-domain';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../entities';
import { Repository } from 'typeorm';

export function provideAccountRepository() {
  return {
    provide: AccountRepository,
    useFactory(repository: Repository<AccountEntity>) {
      return new AccountRepositoryImpl(repository);
    },
    inject: [getRepositoryToken(AccountEntity)],
  };
}

export function provideAccountRepositoryTest(Repository: AccountRepository) {
  return {
    provide: AccountRepository,
    useValue: Repository,
  };
}
