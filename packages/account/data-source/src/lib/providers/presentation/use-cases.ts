import {
  PresentationRepository,
  FindPresentationsServerUseCase,
  FindOnePresentationServerUseCase,
  UpdatePresentationServerUseCase,
  RemovePresentationServerUseCase,
  CreatePresentationServerUseCase,
} from '@devmx/account-domain';

export function provideCreatePresentationServerUseCase() {
  return {
    provide: CreatePresentationServerUseCase,
    useFactory(account: PresentationRepository) {
      return new CreatePresentationServerUseCase(account);
    },
    inject: [PresentationRepository],
  };
}

export function provideFindPresentationsServerUseCase() {
  return {
    provide: FindPresentationsServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new FindPresentationsServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}

export function provideFindOnePresentationServerUseCase() {
  return {
    provide: FindOnePresentationServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new FindOnePresentationServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}

export function provideUpdatePresentationServerUseCase() {
  return {
    provide: UpdatePresentationServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new UpdatePresentationServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}

export function provideRemovePresentationServerUseCase() {
  return {
    provide: RemovePresentationServerUseCase,
    useFactory(repository: PresentationRepository) {
      return new RemovePresentationServerUseCase(repository);
    },
    inject: [PresentationRepository],
  };
}
