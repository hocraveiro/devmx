import { Presentation } from '@devmx/account-api';
import { ApiProperty } from '@nestjs/swagger';
import { Event } from '@devmx/events-domain';

export class EventDto implements Event {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  startsAt?: Date;

  presentations: Presentation[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
