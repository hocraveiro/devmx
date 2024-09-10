import { Presentation } from '@devmx/account-api';
import { Entity } from '@devmx/shared-api-interfaces';

export interface Event extends Entity {
  name: string;

  description?: string;

  startsAt?: Date;

  presentations: Presentation[]
}
