import { PresentationLikeFacade } from '../../facades';
import {
  CreatePresentationLikeServerUseCase,
  FindPresentationLikesServerUseCase,
  FindOnePresentationLikeServerUseCase,
  RemovePresentationLikeServerUseCase,
  UpdatePresentationLikeServerUseCase,
} from '@devmx/account-domain';

export function providePresentationLikeServerFacade() {
  return {
    provide: PresentationLikeFacade,
    useFactory(
      createPresentationLike: CreatePresentationLikeServerUseCase,
      findPresentationLikes: FindPresentationLikesServerUseCase,
      findOnePresentationLike: FindOnePresentationLikeServerUseCase,
      updatePresentationLike: UpdatePresentationLikeServerUseCase,
      removePresentationLike: RemovePresentationLikeServerUseCase
    ) {
      return new PresentationLikeFacade(
        createPresentationLike,
        findPresentationLikes,
        findOnePresentationLike,
        updatePresentationLike,
        removePresentationLike
      );
    },
    inject: [
      CreatePresentationLikeServerUseCase,
      FindPresentationLikesServerUseCase,
      FindOnePresentationLikeServerUseCase,
      UpdatePresentationLikeServerUseCase,
      RemovePresentationLikeServerUseCase,
    ],
  };
}
