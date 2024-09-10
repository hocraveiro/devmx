import { Entity, RSVPStatus } from '@devmx/shared-api-interfaces';
import { Account } from '@devmx/account-api';
import { Event } from './event';

export interface RSVP extends Entity {
  status: RSVPStatus;

  accounts: Account[];

  events: Event[];
}
