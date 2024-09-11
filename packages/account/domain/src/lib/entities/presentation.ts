import { Entity, PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationComment } from './presentation-comment';
import { PresentationReaction } from './presentation-reaction';

export interface Presentation extends Entity {
  title: string;

  description: string

  format: PresentationFormat

  tags: string[]

  resources: string[]

  comments: PresentationComment[];

  reactions: PresentationReaction[];
}
