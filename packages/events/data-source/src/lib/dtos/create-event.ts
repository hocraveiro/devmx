import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';
import { Creatable, EventFormat } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountDto, PresentationDto } from '@devmx/account-api';
import { Type } from 'class-transformer';
import { EventDto } from './event';

export class CreateEventDto implements Creatable<EventDto> {
  @IsString()
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsDate()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  endDate: Date;

  @ApiProperty()
  @IsArray()
  schedule: string[];

  @ApiProperty({
    enum: ['online', 'in-person', 'hybrid'],
    example: 'in-person',
  })
  @IsString()
  format: EventFormat;

  @ApiPropertyOptional()
  @IsOptional()
  cover?: string;

  @Type(() => AccountDto)
  // @ApiProperty({ type: [AccountDto] })
  organizers: AccountDto[] = [];

  @Type(() => PresentationDto)
  // @ApiProperty({ type: [PresentationDto] })
  presentations: PresentationDto[] = [];
}
