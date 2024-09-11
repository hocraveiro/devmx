import { PresentationReactionFacade } from '../../facades';
import {
  CountPresentationReactionsServerUseCase,
  CreatePresentationReactionServerUseCase,
  FindOnePresentationReactionServerUseCase,
  FindPresentationReactionsServerUseCase,
  RemovePresentationReactionServerUseCase,
} from '@devmx/account-domain';

export function providePresentationReactionServerFacade() {
  return {
    provide: PresentationReactionFacade,
    useFactory(
      createPresentationReaction: CreatePresentationReactionServerUseCase,
      findPresentationReactions: FindPresentationReactionsServerUseCase,
      findOnePresentationReaction: FindOnePresentationReactionServerUseCase,
      countPresentationReactions: CountPresentationReactionsServerUseCase,
      removePresentationReaction: RemovePresentationReactionServerUseCase
    ) {
      return new PresentationReactionFacade(
        createPresentationReaction,
        findPresentationReactions,
        findOnePresentationReaction,
        countPresentationReactions,
        removePresentationReaction
      );
    },
    inject: [
      CreatePresentationReactionServerUseCase,
      FindPresentationReactionsServerUseCase,
      FindOnePresentationReactionServerUseCase,
      CountPresentationReactionsServerUseCase,
      RemovePresentationReactionServerUseCase,
    ],
  };
}
