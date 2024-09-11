import {
  PresentationReactionRepository,
  FindPresentationReactionsServerUseCase,
  RemovePresentationReactionServerUseCase,
  CreatePresentationReactionServerUseCase,
  CountPresentationReactionsServerUseCase,
  FindOnePresentationReactionServerUseCase,
} from '@devmx/account-domain';

export function provideCreatePresentationReactionServerUseCase() {
  return {
    provide: CreatePresentationReactionServerUseCase,
    useFactory(account: PresentationReactionRepository) {
      return new CreatePresentationReactionServerUseCase(account);
    },
    inject: [PresentationReactionRepository],
  };
}

export function provideFindPresentationReactionsServerUseCase() {
  return {
    provide: FindPresentationReactionsServerUseCase,
    useFactory(repository: PresentationReactionRepository) {
      return new FindPresentationReactionsServerUseCase(repository);
    },
    inject: [PresentationReactionRepository],
  };
}

export function provideFindOnePresentationReactionServerUseCase() {
  return {
    provide: FindOnePresentationReactionServerUseCase,
    useFactory(repository: PresentationReactionRepository) {
      return new FindOnePresentationReactionServerUseCase(repository);
    },
    inject: [PresentationReactionRepository],
  };
}

export function provideCountPresentationReactionsServerUseCase() {
  return {
    provide: CountPresentationReactionsServerUseCase,
    useFactory(repository: PresentationReactionRepository) {
      return new CountPresentationReactionsServerUseCase(repository);
    },
    inject: [PresentationReactionRepository],
  };
}

export function provideRemovePresentationReactionServerUseCase() {
  return {
    provide: RemovePresentationReactionServerUseCase,
    useFactory(repository: PresentationReactionRepository) {
      return new RemovePresentationReactionServerUseCase(repository);
    },
    inject: [PresentationReactionRepository],
  };
}
