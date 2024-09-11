import { Entity, PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationComment } from './presentation-comment';
import { PresentationReaction } from './presentation-reaction';
import { Account } from './account';

export interface Presentation extends Entity {
  title: string;

  description: string

  format: PresentationFormat

  tags: string[]

  account?: Account

  resources: string[]

  comments: PresentationComment[];

  reactions: PresentationReaction[];
}
