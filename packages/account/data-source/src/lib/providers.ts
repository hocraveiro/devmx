import { NestProvider } from '@devmx/shared-api-interfaces';
import { CryptoServiceImpl } from './services';
import {
  AccountEntity,
  PresentationEntity,
  PresentationCommentEntity,
  PresentationReactionEntity,
} from './entities';
import {
  provideJwtStrategy,
  provideAccountRepository,
  provideCryptoServiceImpl,
  provideSignUpServerUseCase,
  provideAccountServerFacade,
  provideSignInServerUseCase,
  provideAuthenticationFacade,
  provideFindAccountsServerUseCase,
  provideCreateAccountServerUseCase,
  provideFindOneAccountServerUseCase,
  provideRemoveAccountServerUseCase,
  provideUpdateAccountServerUseCase,
  provideCheckUsernameServerUseCase,
  provideUpdateAccountPasswordServerUseCase,
} from './providers/account';
import {
  providePresentationRepository,
  providePresentationServerFacade,
  provideCreatePresentationServerUseCase,
  provideFindOnePresentationServerUseCase,
  provideFindPresentationsServerUseCase,
  provideRemovePresentationServerUseCase,
  provideUpdatePresentationServerUseCase,
} from './providers/presentation';
import {
  providePresentationReactionRepository,
  providePresentationReactionServerFacade,
  provideCountPresentationReactionsServerUseCase,
  provideCreatePresentationReactionServerUseCase,
  provideFindOnePresentationReactionServerUseCase,
  provideFindPresentationReactionsServerUseCase,
  provideRemovePresentationReactionServerUseCase,
} from './providers/presentation-reaction';
import {
  providePresentationCommentRepository,
  providePresentationCommentServerFacade,
  provideFindPresentationCommentsServerUseCase,
  provideCreatePresentationCommentServerUseCase,
  provideFindOnePresentationCommentServerUseCase,
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
  provideUpdateAccountPasswordServerUseCase(),

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

  provideCheckUsernameServerUseCase(),

  provideAuthenticationFacade(),
];

export const dataSourceAccountEntities = [
  AccountEntity,
  PresentationEntity,
  PresentationReactionEntity,
  PresentationCommentEntity,
];
