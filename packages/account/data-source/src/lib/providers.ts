import { NestProvider } from '@devmx/shared-api-interfaces';
import { AccountEntity } from './entities';
import { provideAccountRepository, provideAccountServerFacade, provideCreateAccountServerUseCase, provideFindAccountsServerUseCase, provideFindOneAccountServerUseCase, provideRemoveAccountServerUseCase, provideUpdateAccountServerUseCase } from './providers/account';
import { AccountRepositoryImpl } from './repositories';

export const dataSourceAccountProviders: NestProvider[] = [
  provideAccountRepository(AccountRepositoryImpl),

  provideCreateAccountServerUseCase(),
  provideFindAccountsServerUseCase(),
  provideFindOneAccountServerUseCase(),
  provideUpdateAccountServerUseCase(),
  provideRemoveAccountServerUseCase(),

  provideAccountServerFacade(),
];

export const dataSourceAccountEntities = [AccountEntity];
