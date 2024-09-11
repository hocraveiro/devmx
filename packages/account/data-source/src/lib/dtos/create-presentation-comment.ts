import { PresentationComment } from '@devmx/account-domain';
import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationCommentDto
  implements Creatable<PresentationComment>
{
  @IsString()
  @ApiProperty()
  message: string;

  presentation: PresentationDto
}
