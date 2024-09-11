import { AccountFacade } from '../../facades';
import {
  CreateAccountServerUseCase,
  FindAccountsServerUseCase,
  FindOneAccountServerUseCase,
  FindPresentationsServerUseCase,
  RemoveAccountServerUseCase,
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
