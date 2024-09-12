import { AngularProvider } from '@devmx/shared-api-interfaces';
import {
  AuthService,
  AccountService,
  StorageService,
  SignInClientUseCase,
  SignUpClientUseCase,
  GetAuthAccountClientUseCase,
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
