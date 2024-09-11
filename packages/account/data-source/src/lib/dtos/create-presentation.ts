import { PresentationCommentDto } from './presentation-comment';
import { PresentationReactionDto } from './presentation-reaction';
import { Creatable, PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';

export class CreatePresentationDto implements Creatable<PresentationDto> {
  @IsString()
  @ApiProperty()
  title: string;

  @ApiProperty()
  @IsString()
  @MaxLength(512)
  description: string;

  @ApiProperty()
  @IsString()
  format: PresentationFormat;

  @ApiProperty()
  @IsArray()
  tags: string[];

  @ApiProperty()
  @IsArray()
  resources: string[];

  comments: PresentationCommentDto[] = [];

  reactions: PresentationReactionDto[] = [];
}
