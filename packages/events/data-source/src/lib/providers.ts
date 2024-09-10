import { EventRepositoryImpl, RSVPRepositoryImpl } from './repositories';
import { NestProvider } from '@devmx/shared-api-interfaces';
import { EventEntity, RSVPEntity } from './entities';
import {
  provideCreateEventServerUseCase,
  provideEventRepository,
  provideEventServerFacade,
  provideFindEventsServerUseCase,
  provideFindOneEventServerUseCase,
  provideRemoveEventServerUseCase,
  provideUpdateEventServerUseCase,
} from './providers/event';
import {
  provideCreateRSVPServerUseCase,
  provideFindOneRSVPServerUseCase,
  provideFindRSVPSServerUseCase,
  provideRemoveRSVPServerUseCase,
  provideRSVPRepository,
  provideRSVPServerFacade,
  provideUpdateRSVPServerUseCase,
} from './providers/rsvp';

export const dataSourceEventsProviders: NestProvider[] = [
  provideEventRepository(EventRepositoryImpl),
  provideCreateEventServerUseCase(),
  provideFindEventsServerUseCase(),
  provideFindOneEventServerUseCase(),
  provideUpdateEventServerUseCase(),
  provideRemoveEventServerUseCase(),
  provideEventServerFacade(),

  provideRSVPRepository(RSVPRepositoryImpl),
  provideCreateRSVPServerUseCase(),
  provideFindRSVPSServerUseCase(),
  provideFindOneRSVPServerUseCase(),
  provideUpdateRSVPServerUseCase(),
  provideRemoveRSVPServerUseCase(),
  provideRSVPServerFacade(),
];

export const dataSourceEventsEntities = [EventEntity, RSVPEntity];
