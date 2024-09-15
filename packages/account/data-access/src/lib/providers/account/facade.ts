import { AngularProvider } from '@devmx/shared-api-interfaces';
import { AccountFacade, AuthFacade } from '../../facades';
import {
  SignInClientUseCase,
  SignUpClientUseCase,
  SignOutClientUseCase,
  GetAuthAccountClientUseCase,
  FindAccountsClientUseCase,
  FindOneAccountClientUseCase,
  UpdateAccountClientUseCase,
  UpdateAccountPasswordClientUseCase,
} from '@devmx/account-domain';

export function provideAuthFacade(): AngularProvider {
  return {
    provide: AuthFacade,
    useFactory(
      signUp: SignUpClientUseCase,
      signIn: SignInClientUseCase,
      getAuthAccount: GetAuthAccountClientUseCase,
      signOut: SignOutClientUseCase
    ) {
      return new AuthFacade(signUp, signIn, getAuthAccount, signOut);
    },
    deps: [
      SignUpClientUseCase,
      SignInClientUseCase,
      GetAuthAccountClientUseCase,
      SignOutClientUseCase,
    ],
  };
}

export function provideAccountFacade(): AngularProvider {
  return {
    provide: AccountFacade,
    useFactory(
      findAccounts: FindAccountsClientUseCase,
      findOneAccount: FindOneAccountClientUseCase,
      updateAccount: UpdateAccountClientUseCase,
      updateAccountPassword: UpdateAccountPasswordClientUseCase
    ) {
      return new AccountFacade(
        findAccounts,
        findOneAccount,
        updateAccount,
        updateAccountPassword
      );
    },
    deps: [
      FindAccountsClientUseCase,
      FindOneAccountClientUseCase,
      UpdateAccountClientUseCase,
      UpdateAccountPasswordClientUseCase,
    ],
  };
}
