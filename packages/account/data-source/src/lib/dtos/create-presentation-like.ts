import { PresentationLikeDto } from './presentation-like';
import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationLikeDto
  implements Creatable<PresentationLikeDto>
{
  @IsString()
  @ApiProperty()
  name: string;

  presentation: PresentationDto;
}
