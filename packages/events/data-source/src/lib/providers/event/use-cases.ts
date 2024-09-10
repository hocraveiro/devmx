import {
  EventRepository,
  FindEventsServerUseCase,
  FindOneEventServerUseCase,
  UpdateEventServerUseCase,
  RemoveEventServerUseCase,
  CreateEventServerUseCase,
} from '@devmx/events-domain';

export function provideCreateEventServerUseCase() {
  return {
    provide: CreateEventServerUseCase,
    useFactory(account: EventRepository) {
      return new CreateEventServerUseCase(account);
    },
    inject: [EventRepository],
  };
}

export function provideFindEventsServerUseCase() {
  return {
    provide: FindEventsServerUseCase,
    useFactory(repository: EventRepository) {
      return new FindEventsServerUseCase(repository);
    },
    inject: [EventRepository],
  };
}

export function provideFindOneEventServerUseCase() {
  return {
    provide: FindOneEventServerUseCase,
    useFactory(repository: EventRepository) {
      return new FindOneEventServerUseCase(repository);
    },
    inject: [EventRepository],
  };
}

export function provideUpdateEventServerUseCase() {
  return {
    provide: UpdateEventServerUseCase,
    useFactory(repository: EventRepository) {
      return new UpdateEventServerUseCase(repository);
    },
    inject: [EventRepository],
  };
}

export function provideRemoveEventServerUseCase() {
  return {
    provide: RemoveEventServerUseCase,
    useFactory(repository: EventRepository) {
      return new RemoveEventServerUseCase(repository);
    },
    inject: [EventRepository],
  };
}
