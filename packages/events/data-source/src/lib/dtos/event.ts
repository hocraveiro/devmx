import { EventFormat } from '@devmx/shared-api-interfaces';
import { AccountDto, PresentationDto } from '@devmx/account-api';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Event } from '@devmx/events-domain';
import { Type } from 'class-transformer';

export class EventDto implements Event {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  schedule: string[];

  @ApiProperty()
  format: EventFormat;

  @ApiPropertyOptional()
  cover?: string;

  @ApiProperty()
  @Type(() => AccountDto)
  organizers: AccountDto[];

  @ApiProperty()
  @Type(() => PresentationDto)
  presentations: PresentationDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
