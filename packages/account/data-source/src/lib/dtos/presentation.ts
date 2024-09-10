import { PresentationCommentDto } from './presentation-comment';
import { Presentation } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';
import { PresentationLikeDto } from './presentation-like';
import { Type } from 'class-transformer';

export class PresentationDto implements Presentation {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  @Type(() => PresentationCommentDto)
  comments: PresentationCommentDto[];

  @Type(() => PresentationLikeDto)
  likes: PresentationLikeDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
