import {
  PresentationCommentRepository,
  FindPresentationCommentsServerUseCase,
  FindOnePresentationCommentServerUseCase,
  UpdatePresentationCommentServerUseCase,
  RemovePresentationCommentServerUseCase,
  CreatePresentationCommentServerUseCase,
} from '@devmx/account-domain';

export function provideCreatePresentationCommentServerUseCase() {
  return {
    provide: CreatePresentationCommentServerUseCase,
    useFactory(account: PresentationCommentRepository) {
      return new CreatePresentationCommentServerUseCase(account);
    },
    inject: [PresentationCommentRepository],
  };
}

export function provideFindPresentationCommentsServerUseCase() {
  return {
    provide: FindPresentationCommentsServerUseCase,
    useFactory(repository: PresentationCommentRepository) {
      return new FindPresentationCommentsServerUseCase(repository);
    },
    inject: [PresentationCommentRepository],
  };
}

export function provideFindOnePresentationCommentServerUseCase() {
  return {
    provide: FindOnePresentationCommentServerUseCase,
    useFactory(repository: PresentationCommentRepository) {
      return new FindOnePresentationCommentServerUseCase(repository);
    },
    inject: [PresentationCommentRepository],
  };
}

export function provideUpdatePresentationCommentServerUseCase() {
  return {
    provide: UpdatePresentationCommentServerUseCase,
    useFactory(repository: PresentationCommentRepository) {
      return new UpdatePresentationCommentServerUseCase(repository);
    },
    inject: [PresentationCommentRepository],
  };
}

export function provideRemovePresentationCommentServerUseCase() {
  return {
    provide: RemovePresentationCommentServerUseCase,
    useFactory(repository: PresentationCommentRepository) {
      return new RemovePresentationCommentServerUseCase(repository);
    },
    inject: [PresentationCommentRepository],
  };
}
