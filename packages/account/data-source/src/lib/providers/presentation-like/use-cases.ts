import {
  PresentationLikeRepository,
  FindPresentationLikesServerUseCase,
  FindOnePresentationLikeServerUseCase,
  UpdatePresentationLikeServerUseCase,
  RemovePresentationLikeServerUseCase,
  CreatePresentationLikeServerUseCase,
} from '@devmx/account-domain';

export function provideCreatePresentationLikeServerUseCase() {
  return {
    provide: CreatePresentationLikeServerUseCase,
    useFactory(account: PresentationLikeRepository) {
      return new CreatePresentationLikeServerUseCase(account);
    },
    inject: [PresentationLikeRepository],
  };
}

export function provideFindPresentationLikesServerUseCase() {
  return {
    provide: FindPresentationLikesServerUseCase,
    useFactory(repository: PresentationLikeRepository) {
      return new FindPresentationLikesServerUseCase(repository);
    },
    inject: [PresentationLikeRepository],
  };
}

export function provideFindOnePresentationLikeServerUseCase() {
  return {
    provide: FindOnePresentationLikeServerUseCase,
    useFactory(repository: PresentationLikeRepository) {
      return new FindOnePresentationLikeServerUseCase(repository);
    },
    inject: [PresentationLikeRepository],
  };
}

export function provideUpdatePresentationLikeServerUseCase() {
  return {
    provide: UpdatePresentationLikeServerUseCase,
    useFactory(repository: PresentationLikeRepository) {
      return new UpdatePresentationLikeServerUseCase(repository);
    },
    inject: [PresentationLikeRepository],
  };
}

export function provideRemovePresentationLikeServerUseCase() {
  return {
    provide: RemovePresentationLikeServerUseCase,
    useFactory(repository: PresentationLikeRepository) {
      return new RemovePresentationLikeServerUseCase(repository);
    },
    inject: [PresentationLikeRepository],
  };
}
