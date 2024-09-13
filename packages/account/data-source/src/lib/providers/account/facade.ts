import { AccountFacade, AuthenticationFacade } from '../../facades';
import {
  CheckUsernameServerUseCase,
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
    useFactory(
      signUp: SignUpServerUseCase,
      signIn: SignInServerUseCase,
      checkUsername: CheckUsernameServerUseCase
    ) {
      return new AuthenticationFacade(signUp, signIn, checkUsername);
    },
    inject: [
      SignUpServerUseCase,
      SignInServerUseCase,
      CheckUsernameServerUseCase,
    ],
  };
}
