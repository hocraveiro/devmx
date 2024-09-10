import {
  AccountRepository,
  FindAccountsServerUseCase,
  FindOneAccountServerUseCase,
  UpdateAccountServerUseCase,
  RemoveAccountServerUseCase,
  CreateAccountServerUseCase,
} from '@devmx/account-domain';

export function provideCreateAccountServerUseCase() {
  return {
    provide: CreateAccountServerUseCase,
    useFactory(account: AccountRepository) {
      return new CreateAccountServerUseCase(account);
    },
    inject: [AccountRepository],
  };
}

export function provideFindAccountsServerUseCase() {
  return {
    provide: FindAccountsServerUseCase,
    useFactory(repository: AccountRepository) {
      return new FindAccountsServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideFindOneAccountServerUseCase() {
  return {
    provide: FindOneAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new FindOneAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideUpdateAccountServerUseCase() {
  return {
    provide: UpdateAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new UpdateAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideRemoveAccountServerUseCase() {
  return {
    provide: RemoveAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new RemoveAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}
