import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationReactionDto } from './presentation-reaction';
import { PresentationCommentDto } from './presentation-comment';
import { Presentation } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationDto implements Presentation {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;


  @ApiProperty()
  description: string;

  @ApiProperty()
  format: PresentationFormat;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  resources: string[];

  @ApiProperty()
  @Type(() => PresentationCommentDto)
  comments: PresentationCommentDto[];

  @Type(() => PresentationReactionDto)
  reactions: PresentationReactionDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
