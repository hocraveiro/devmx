import { Account, Presentation } from '@devmx/account-api';
import { Entity, EventFormat } from '@devmx/shared-api-interfaces';

export interface Event extends Entity {
  name: string;

  description?: string;

  startDate: Date;

  endDate: Date;

  schedule: string[]

  format: EventFormat

  cover?: string

  organizers: Account[]

  presentations: Presentation[]
}
