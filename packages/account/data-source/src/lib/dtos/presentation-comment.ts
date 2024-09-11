import { PresentationComment } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';

export class PresentationCommentDto implements PresentationComment {
  @ApiProperty()
  id: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  @Type(() => PresentationDto)
  presentation: PresentationDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
