import { AngularProvider } from '@devmx/shared-api-interfaces';
import { AccountFacade, AuthFacade } from '../../facades';
import {
  SignInClientUseCase,
  SignUpClientUseCase,
  GetAuthAccountClientUseCase,
  FindAccountsClientUseCase,
  FindOneAccountClientUseCase,
  UpdateAccountClientUseCase,
} from '@devmx/account-domain';

export function provideAuthFacade(): AngularProvider {
  return {
    provide: AuthFacade,
    useFactory(
      signUp: SignUpClientUseCase,
      signIn: SignInClientUseCase,
      getAuthAccount: GetAuthAccountClientUseCase
    ) {
      return new AuthFacade(signUp, signIn, getAuthAccount);
    },
    deps: [
      SignUpClientUseCase,
      SignInClientUseCase,
      GetAuthAccountClientUseCase,
    ],
  };
}

export function provideAccountFacade(): AngularProvider {
  return {
    provide: AccountFacade,
    useFactory(
      findAccounts: FindAccountsClientUseCase,
      findOneAccount: FindOneAccountClientUseCase,
      updateAccount: UpdateAccountClientUseCase
    ) {
      return new AccountFacade(findAccounts, findOneAccount, updateAccount);
    },
    deps: [
      FindAccountsClientUseCase,
      FindOneAccountClientUseCase,
      UpdateAccountClientUseCase,
    ],
  };
}
