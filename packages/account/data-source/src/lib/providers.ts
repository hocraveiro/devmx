import { NestProvider } from '@devmx/shared-api-interfaces';
import { CryptoServiceImpl } from './services';
import {
  AccountEntity,
  PresentationCommentEntity,
  PresentationEntity,
  PresentationReactionEntity,
} from './entities';
import {
  provideSignUpServerUseCase,
  provideAccountRepository,
  provideAccountServerFacade,
  provideCreateAccountServerUseCase,
  provideCryptoServiceImpl,
  provideFindAccountsServerUseCase,
  provideFindOneAccountServerUseCase,
  provideRemoveAccountServerUseCase,
  provideUpdateAccountServerUseCase,
  provideSignInServerUseCase,
  provideAuthenticationFacade,
} from './providers/account';
import {
  AccountRepositoryImpl,
  PresentationCommentRepositoryImpl,
  PresentationReactionRepositoryImpl,
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
import {
  provideCountPresentationReactionsServerUseCase,
  provideCreatePresentationReactionServerUseCase,
  provideFindOnePresentationReactionServerUseCase,
  provideFindPresentationReactionsServerUseCase,
  providePresentationReactionRepository,
  providePresentationReactionServerFacade,
  provideRemovePresentationReactionServerUseCase,
} from './providers/presentation-reaction';
import {
  provideCreatePresentationCommentServerUseCase,
  provideFindOnePresentationCommentServerUseCase,
  provideFindPresentationCommentsServerUseCase,
  providePresentationCommentRepository,
  providePresentationCommentServerFacade,
  provideRemovePresentationCommentServerUseCase,
  provideUpdatePresentationCommentServerUseCase,
} from './providers/presentation-comment';

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

  providePresentationReactionRepository(PresentationReactionRepositoryImpl),
  provideCreatePresentationReactionServerUseCase(),
  provideFindPresentationReactionsServerUseCase(),
  provideFindOnePresentationReactionServerUseCase(),
  provideCountPresentationReactionsServerUseCase(),
  provideRemovePresentationReactionServerUseCase(),
  providePresentationReactionServerFacade(),

  providePresentationCommentRepository(PresentationCommentRepositoryImpl),
  provideCreatePresentationCommentServerUseCase(),
  provideFindPresentationCommentsServerUseCase(),
  provideFindOnePresentationCommentServerUseCase(),
  provideUpdatePresentationCommentServerUseCase(),
  provideRemovePresentationCommentServerUseCase(),
  providePresentationCommentServerFacade(),

  provideCryptoServiceImpl(CryptoServiceImpl),

  provideSignUpServerUseCase(),
  provideSignInServerUseCase(),

  provideAuthenticationFacade(),
];

export const dataSourceAccountEntities = [
  AccountEntity,
  PresentationEntity,
  PresentationReactionEntity,
  PresentationCommentEntity,
];
