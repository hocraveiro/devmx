import { NestProvider } from '@devmx/shared-api-interfaces';
import { AccountEntity, PresentationEntity } from './entities';
import {
  provideAccountRepository,
  provideAccountServerFacade,
  provideCreateAccountServerUseCase,
  provideFindAccountsServerUseCase,
  provideFindOneAccountServerUseCase,
  provideRemoveAccountServerUseCase,
  provideUpdateAccountServerUseCase,
} from './providers/account';
import {
  AccountRepositoryImpl,
  PresentationRepositoryImpl,
} from './repositories';
import {
  provideCreatePresentationServerUseCase,
  provideFindOnePresentationServerUseCase,
  provideFindPresentationsServerUseCase,
  providePresentationRepository,
  providePresentationServerFacade,
  provideRemovePresentationServerUseCase,
  provideUpdatePresentationServerUseCase,
} from './providers/presentation';

export const dataSourceAccountProviders: NestProvider[] = [
  provideAccountRepository(AccountRepositoryImpl),

  provideCreateAccountServerUseCase(),
  provideFindAccountsServerUseCase(),
  provideFindOneAccountServerUseCase(),
  provideUpdateAccountServerUseCase(),
  provideRemoveAccountServerUseCase(),

  provideAccountServerFacade(),

  providePresentationRepository(PresentationRepositoryImpl),
  provideCreatePresentationServerUseCase(),
  provideFindPresentationsServerUseCase(),
  provideFindOnePresentationServerUseCase(),
  provideUpdatePresentationServerUseCase(),
  provideRemovePresentationServerUseCase(),
  providePresentationServerFacade(),
];

export const dataSourceAccountEntities = [AccountEntity, PresentationEntity];
