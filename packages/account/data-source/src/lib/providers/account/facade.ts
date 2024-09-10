import { AccountFacade } from '../../facades';
import {
  CreateAccountServerUseCase,
  FindAccountsServerUseCase,
  FindOneAccountServerUseCase,
  RemoveAccountServerUseCase,
  UpdateAccountServerUseCase,
} from '@devmx/account/domain';

export function provideAccountServerFacade() {
  return {
    provide: AccountFacade,
    useFactory(
      createAccount: CreateAccountServerUseCase,
      findAccounts: FindAccountsServerUseCase,
      findOneAccount: FindOneAccountServerUseCase,
      updateAccount: UpdateAccountServerUseCase,
      removeAccount: RemoveAccountServerUseCase
    ) {
      return new AccountFacade(
        createAccount,
        findAccounts,
        findOneAccount,
        updateAccount,
        removeAccount
      );
    },
    inject: [
      CreateAccountServerUseCase,
      FindAccountsServerUseCase,
      FindOneAccountServerUseCase,
      UpdateAccountServerUseCase,
      RemoveAccountServerUseCase,
    ],
  };
}
