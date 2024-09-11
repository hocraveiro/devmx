import { Entity, ReactionType } from '@devmx/shared-api-interfaces';
import { Presentation } from './presentation';

export interface PresentationReaction extends Entity {
  type: ReactionType;

  presentation: Presentation;
}
