import { Entity } from '@devmx/shared-api-interfaces';
import { Presentation } from './presentation';

export interface PresentationLike extends Entity {
  name: string;

  presentation: Presentation
}
