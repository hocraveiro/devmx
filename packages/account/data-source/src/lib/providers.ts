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
  provideJwtStrategy,
} from './providers/account';
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
  provideJwtStrategy(),

  provideAccountRepository(),

  provideCreateAccountServerUseCase(),
  provideFindAccountsServerUseCase(),
  provideFindOneAccountServerUseCase(),
  provideUpdateAccountServerUseCase(),
  provideRemoveAccountServerUseCase(),

  provideAccountServerFacade(),

  providePresentationRepository(),
  provideCreatePresentationServerUseCase(),
  provideFindPresentationsServerUseCase(),
  provideFindOnePresentationServerUseCase(),
  provideUpdatePresentationServerUseCase(),
  provideRemovePresentationServerUseCase(),
  providePresentationServerFacade(),

  providePresentationReactionRepository(),
  provideCreatePresentationReactionServerUseCase(),
  provideFindPresentationReactionsServerUseCase(),
  provideFindOnePresentationReactionServerUseCase(),
  provideCountPresentationReactionsServerUseCase(),
  provideRemovePresentationReactionServerUseCase(),
  providePresentationReactionServerFacade(),

  providePresentationCommentRepository(),
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
