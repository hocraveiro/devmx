import { RSVPStatus } from '@devmx/shared-api-interfaces';
import { AccountDto } from '@devmx/account-api';
import { ApiProperty } from '@nestjs/swagger';
import { RSVP } from '@devmx/events-domain';
import { EventDto } from './event';

export class RSVPDto implements RSVP {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: RSVPStatus;

  accounts: AccountDto[] = [];

  events: EventDto[] = [];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
