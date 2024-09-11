import { AccountFacade, AuthenticationFacade } from '../../facades';
import {
  CreateAccountServerUseCase,
  FindAccountsServerUseCase,
  FindOneAccountServerUseCase,
  FindPresentationsServerUseCase,
  RemoveAccountServerUseCase,
  SignInServerUseCase,
  SignUpServerUseCase,
  UpdateAccountServerUseCase,
} from '@devmx/account-domain';

export function provideAccountServerFacade() {
  return {
    provide: AccountFacade,
    useFactory(
      createAccount: CreateAccountServerUseCase,
      findAccounts: FindAccountsServerUseCase,
      findOneAccount: FindOneAccountServerUseCase,
      updateAccount: UpdateAccountServerUseCase,
      removeAccount: RemoveAccountServerUseCase,
      findPresentations: FindPresentationsServerUseCase
    ) {
      return new AccountFacade(
        createAccount,
        findAccounts,
        findOneAccount,
        updateAccount,
        removeAccount,
        findPresentations
      );
    },
    inject: [
      CreateAccountServerUseCase,
      FindAccountsServerUseCase,
      FindOneAccountServerUseCase,
      UpdateAccountServerUseCase,
      RemoveAccountServerUseCase,
      FindPresentationsServerUseCase,
    ],
  };
}

export function provideAuthenticationFacade() {
  return {
    provide: AuthenticationFacade,
    useFactory(signUp: SignUpServerUseCase, signIn: SignInServerUseCase) {
      return new AuthenticationFacade(signUp, signIn);
    },
    inject: [SignUpServerUseCase, SignInServerUseCase],
  };
}
