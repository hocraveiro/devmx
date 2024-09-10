import { PresentationCommentFacade } from '../../facades';
import {
  CreatePresentationCommentServerUseCase,
  FindPresentationCommentsServerUseCase,
  FindOnePresentationCommentServerUseCase,
  RemovePresentationCommentServerUseCase,
  UpdatePresentationCommentServerUseCase,
} from '@devmx/account-domain';

export function providePresentationCommentServerFacade() {
  return {
    provide: PresentationCommentFacade,
    useFactory(
      createPresentationComment: CreatePresentationCommentServerUseCase,
      findPresentationComments: FindPresentationCommentsServerUseCase,
      findOnePresentationComment: FindOnePresentationCommentServerUseCase,
      updatePresentationComment: UpdatePresentationCommentServerUseCase,
      removePresentationComment: RemovePresentationCommentServerUseCase
    ) {
      return new PresentationCommentFacade(
        createPresentationComment,
        findPresentationComments,
        findOnePresentationComment,
        updatePresentationComment,
        removePresentationComment
      );
    },
    inject: [
      CreatePresentationCommentServerUseCase,
      FindPresentationCommentsServerUseCase,
      FindOnePresentationCommentServerUseCase,
      UpdatePresentationCommentServerUseCase,
      RemovePresentationCommentServerUseCase,
    ],
  };
}
