import { Entity } from '@devmx/shared-api-interfaces';
import { Presentation } from './presentation';

export interface PresentationComment extends Entity {
  name: string;

  presentation: Presentation
}