import { PresentationComment } from './presentation-comment';
import { PresentationLike } from './presentation-like';
import { Entity } from '@devmx/shared-api-interfaces';

export interface Presentation extends Entity {
  name: string;

  comments: PresentationComment[];

  likes: PresentationLike[];
}
