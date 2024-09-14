import { AngularProvider } from '@devmx/shared-api-interfaces';
import { getStorage } from '@devmx/shared-data-access';
import {
  provideAuthFacade,
  provideAuthService,
  provideAccountService,
  provideSignInClientUseCase,
  provideSignUpClientUseCase,
  provideStorageServiceImpl,
  provideGetAuthAccountClientUseCase,
  provideFindAccountsClientUseCase,
  provideFindOneAccountClientUseCase,
  provideAccountFacade,
  provideUpdateAccountClientUseCase,
} from './providers/account';

export const dataAccessAccountProviders: AngularProvider[] = [
  provideStorageServiceImpl(getStorage()),

  provideAuthService(),
  provideAccountService(),

  provideSignInClientUseCase(),
  provideSignUpClientUseCase(),
  provideGetAuthAccountClientUseCase(),

  provideFindAccountsClientUseCase(),
  provideFindOneAccountClientUseCase(),
  provideUpdateAccountClientUseCase(),

  provideAuthFacade(),
  provideAccountFacade(),
];