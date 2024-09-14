import { Creatable, ReactionType } from '@devmx/shared-api-interfaces';
import { PresentationReactionDto } from './presentation-reaction';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationReactionDto
  implements Creatable<PresentationReactionDto>
{
  @IsString()
  @ApiProperty({
    type: 'enum',
    enum: [
      'claps',
      'mindblowing',
      'insightful',
      'amazing',
      'interesting',
      'learnedSomething',
      'like',
    ],
    example: 'claps'
  })
  type: ReactionType;

  presentation: PresentationDto;
}
