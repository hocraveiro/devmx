import { PresentationCommentDto } from './presentation-comment';
import { PresentationLikeDto } from './presentation-like';
import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationDto implements Creatable<PresentationDto> {
  @IsString()
  @ApiProperty()
  name: string;

  comments: PresentationCommentDto[] = [];

  likes: PresentationLikeDto[] = [];
}
