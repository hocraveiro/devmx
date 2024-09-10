import {
  RSVPRepository,
  FindRSVPSServerUseCase,
  FindOneRSVPServerUseCase,
  UpdateRSVPServerUseCase,
  RemoveRSVPServerUseCase,
  CreateRSVPServerUseCase,
} from '@devmx/events-domain';

export function provideCreateRSVPServerUseCase() {
  return {
    provide: CreateRSVPServerUseCase,
    useFactory(account: RSVPRepository) {
      return new CreateRSVPServerUseCase(account);
    },
    inject: [RSVPRepository],
  };
}

export function provideFindRSVPSServerUseCase() {
  return {
    provide: FindRSVPSServerUseCase,
    useFactory(repository: RSVPRepository) {
      return new FindRSVPSServerUseCase(repository);
    },
    inject: [RSVPRepository],
  };
}

export function provideFindOneRSVPServerUseCase() {
  return {
    provide: FindOneRSVPServerUseCase,
    useFactory(repository: RSVPRepository) {
      return new FindOneRSVPServerUseCase(repository);
    },
    inject: [RSVPRepository],
  };
}

export function provideUpdateRSVPServerUseCase() {
  return {
    provide: UpdateRSVPServerUseCase,
    useFactory(repository: RSVPRepository) {
      return new UpdateRSVPServerUseCase(repository);
    },
    inject: [RSVPRepository],
  };
}

export function provideRemoveRSVPServerUseCase() {
  return {
    provide: RemoveRSVPServerUseCase,
    useFactory(repository: RSVPRepository) {
      return new RemoveRSVPServerUseCase(repository);
    },
    inject: [RSVPRepository],
  };
}
