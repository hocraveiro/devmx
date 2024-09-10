import { NestProvider } from '@devmx/shared-api-interfaces';
import {
  AccountEntity,
  PresentationCommentEntity,
  PresentationEntity,
  PresentationLikeEntity,
} from './entities';
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
  PresentationCommentRepositoryImpl,
  PresentationLikeRepositoryImpl,
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
  provideCreatePresentationLikeServerUseCase,
  provideFindOnePresentationLikeServerUseCase,
  provideFindPresentationLikesServerUseCase,
  providePresentationLikeRepository,
  providePresentationLikeServerFacade,
  provideRemovePresentationLikeServerUseCase,
  provideUpdatePresentationLikeServerUseCase,
} from './providers/presentation-like';
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

  providePresentationLikeRepository(PresentationLikeRepositoryImpl),
  provideCreatePresentationLikeServerUseCase(),
  provideFindPresentationLikesServerUseCase(),
  provideFindOnePresentationLikeServerUseCase(),
  provideUpdatePresentationLikeServerUseCase(),
  provideRemovePresentationLikeServerUseCase(),
  providePresentationLikeServerFacade(),

  providePresentationCommentRepository(PresentationCommentRepositoryImpl),
  provideCreatePresentationCommentServerUseCase(),
  provideFindPresentationCommentsServerUseCase(),
  provideFindOnePresentationCommentServerUseCase(),
  provideUpdatePresentationCommentServerUseCase(),
  provideRemovePresentationCommentServerUseCase(),
  providePresentationCommentServerFacade(),
];

export const dataSourceAccountEntities = [
  AccountEntity,
  PresentationEntity,
  PresentationLikeEntity,
  PresentationCommentEntity,
];
