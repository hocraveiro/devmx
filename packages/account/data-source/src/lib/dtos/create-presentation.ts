import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationEntity } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationDto implements Creatable<PresentationEntity> {
  @IsString()
  @ApiProperty()
  name: string;
}
