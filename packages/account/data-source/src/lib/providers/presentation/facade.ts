import { PresentationFacade } from '../../facades';
import {
  CreatePresentationServerUseCase,
  FindPresentationsServerUseCase,
  FindOnePresentationServerUseCase,
  RemovePresentationServerUseCase,
  UpdatePresentationServerUseCase,
} from '@devmx/account-domain';

export function providePresentationServerFacade() {
  return {
    provide: PresentationFacade,
    useFactory(
      createPresentation: CreatePresentationServerUseCase,
      findPresentations: FindPresentationsServerUseCase,
      findOnePresentation: FindOnePresentationServerUseCase,
      updatePresentation: UpdatePresentationServerUseCase,
      removePresentation: RemovePresentationServerUseCase
    ) {
      return new PresentationFacade(
        createPresentation,
        findPresentations,
        findOnePresentation,
        updatePresentation,
        removePresentation
      );
    },
    inject: [
      CreatePresentationServerUseCase,
      FindPresentationsServerUseCase,
      FindOnePresentationServerUseCase,
      UpdatePresentationServerUseCase,
      RemovePresentationServerUseCase,
    ],
  };
}
