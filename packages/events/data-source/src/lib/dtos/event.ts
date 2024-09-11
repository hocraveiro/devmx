import { EventFormat } from '@devmx/shared-api-interfaces';
import { AccountDto, PresentationDto } from '@devmx/account-api';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Event } from '@devmx/events-domain';
import { Type } from 'class-transformer';
import { today } from '@devmx/shared-util-data';

export class EventDto implements Event {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: '16º meetup TypeScript' })
  name: string;

  @ApiPropertyOptional({ example: '' })
  description?: string;

  @ApiProperty({ example: today(19).toISOString() })
  startDate: Date;

  @ApiProperty({ example: today(20).toISOString() })
  endDate: Date;

  @ApiProperty({
    example: ['19:00h - 1ª apresentação', '19:30h - 2ª apresentação'],
  })
  schedule: string[];

  @ApiProperty({ example: 'in-person' })
  format: EventFormat;

  @ApiPropertyOptional({ example: '' })
  cover?: string;

  @ApiProperty({ type: [AccountDto] })
  @Type(() => AccountDto)
  organizers: AccountDto[];

  @ApiProperty({ type: [PresentationDto] })
  @Type(() => PresentationDto)
  presentations: PresentationDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
