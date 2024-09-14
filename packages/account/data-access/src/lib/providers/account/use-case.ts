import { AngularProvider } from '@devmx/shared-api-interfaces';
import {
  AuthService,
  AccountService,
  StorageService,
  SignInClientUseCase,
  SignUpClientUseCase,
  GetAuthAccountClientUseCase,
  FindAccountsClientUseCase,
  FindOneAccountClientUseCase,
  UpdateAccountClientUseCase,
} from '@devmx/account-domain';

export function provideSignInClientUseCase(): AngularProvider {
  return {
    provide: SignInClientUseCase,
    useFactory(authService: AuthService, storageService: StorageService) {
      return new SignInClientUseCase(authService, storageService);
    },
    deps: [AuthService, StorageService],
  };
}

export function provideSignUpClientUseCase(): AngularProvider {
  return {
    provide: SignUpClientUseCase,
    useFactory(authService: AuthService) {
      return new SignUpClientUseCase(authService);
    },
    deps: [AuthService],
  };
}

export function provideGetAuthAccountClientUseCase(): AngularProvider {
  return {
    provide: GetAuthAccountClientUseCase,
    useFactory(accountService: AccountService) {
      return new GetAuthAccountClientUseCase(accountService);
    },
    deps: [AccountService],
  };
}

export function provideFindAccountsClientUseCase(): AngularProvider {
  return {
    provide: FindAccountsClientUseCase,
    useFactory(accountService: AccountService) {
      return new FindAccountsClientUseCase(accountService);
    },
    deps: [AccountService],
  };
}

export function provideFindOneAccountClientUseCase(): AngularProvider {
  return {
    provide: FindOneAccountClientUseCase,
    useFactory(accountService: AccountService) {
      return new FindOneAccountClientUseCase(accountService);
    },
    deps: [AccountService],
  };
}

export function provideUpdateAccountClientUseCase(): AngularProvider {
  return {
    provide: UpdateAccountClientUseCase,
    useFactory(accountService: AccountService) {
      return new UpdateAccountClientUseCase(accountService);
    },
    deps: [AccountService],
  };
}
