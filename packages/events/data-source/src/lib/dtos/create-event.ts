import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from '@devmx/account-api';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { EventDto } from './event';

export class CreateEventDto implements Creatable<EventDto> {
  @IsString()
  @ApiProperty()
  name: string;

  presentations: PresentationDto[] = [];
}
