import { Creatable, RSVPStatus } from '@devmx/shared-api-interfaces';
import { AccountDto } from '@devmx/account-api';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { RSVPDto } from './rsvp';
import { EventDto } from './event';

export class CreateRSVPDto implements Creatable<RSVPDto> {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  status: RSVPStatus;

  accounts: AccountDto[];

  events: EventDto[];
}
