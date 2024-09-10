import { RSVPFacade } from '../../facades';
import {
  CreateRSVPServerUseCase,
  FindRSVPSServerUseCase,
  FindOneRSVPServerUseCase,
  RemoveRSVPServerUseCase,
  UpdateRSVPServerUseCase,
} from '@devmx/events-domain';

export function provideRSVPServerFacade() {
  return {
    provide: RSVPFacade,
    useFactory(
      createRSVP: CreateRSVPServerUseCase,
      findRSVPS: FindRSVPSServerUseCase,
      findOneRSVP: FindOneRSVPServerUseCase,
      updateRSVP: UpdateRSVPServerUseCase,
      removeRSVP: RemoveRSVPServerUseCase
    ) {
      return new RSVPFacade(
        createRSVP,
        findRSVPS,
        findOneRSVP,
        updateRSVP,
        removeRSVP
      );
    },
    inject: [
      CreateRSVPServerUseCase,
      FindRSVPSServerUseCase,
      FindOneRSVPServerUseCase,
      UpdateRSVPServerUseCase,
      RemoveRSVPServerUseCase,
    ],
  };
}
