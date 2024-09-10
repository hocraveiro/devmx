import { EventFacade } from '../../facades';
import {
  CreateEventServerUseCase,
  FindEventsServerUseCase,
  FindOneEventServerUseCase,
  RemoveEventServerUseCase,
  UpdateEventServerUseCase,
} from '@devmx/events-domain';

export function provideEventServerFacade() {
  return {
    provide: EventFacade,
    useFactory(
      createEvent: CreateEventServerUseCase,
      findEvents: FindEventsServerUseCase,
      findOneEvent: FindOneEventServerUseCase,
      updateEvent: UpdateEventServerUseCase,
      removeEvent: RemoveEventServerUseCase
    ) {
      return new EventFacade(
        createEvent,
        findEvents,
        findOneEvent,
        updateEvent,
        removeEvent
      );
    },
    inject: [
      CreateEventServerUseCase,
      FindEventsServerUseCase,
      FindOneEventServerUseCase,
      UpdateEventServerUseCase,
      RemoveEventServerUseCase,
    ],
  };
}
