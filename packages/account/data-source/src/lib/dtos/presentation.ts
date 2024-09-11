import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationReactionDto } from './presentation-reaction';
import { PresentationCommentDto } from './presentation-comment';
import { Presentation } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationDto implements Presentation {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'Simples & Fácil' })
  title: string;


  @ApiProperty({ example: '' })
  description: string;

  @ApiProperty({ example: 'talk' })
  format: PresentationFormat;

  @ApiProperty({ example: ['#typescript', '#nest', '#angular', '#nx'] })
  tags: string[];

  // @ApiProperty()
  resources: string[];

  // @ApiProperty()
  @Type(() => PresentationCommentDto)
  comments: PresentationCommentDto[];

  @Type(() => PresentationReactionDto)
  reactions: PresentationReactionDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
