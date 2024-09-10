import { AccountRepository } from '@devmx/account/domain';
import { AccountEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function provideAccountRepository(Repository: Type<AccountRepository>) {
  return {
    provide: AccountRepository,
    useFactory(repository: Repository<AccountEntity>) {
      return new Repository(repository);
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
