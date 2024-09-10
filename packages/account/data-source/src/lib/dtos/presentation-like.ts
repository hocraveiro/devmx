import { PresentationLike } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';

export class PresentationLikeDto implements PresentationLike {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @Type(() => PresentationDto)
  presentation: PresentationDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
