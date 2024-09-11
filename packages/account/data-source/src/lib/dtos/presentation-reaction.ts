import { PresentationReaction } from '@devmx/account-domain';
import { ReactionType } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationReactionDto implements PresentationReaction {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: ReactionType;

  @ApiProperty()
  @Type(() => PresentationDto)
  presentation: PresentationDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
