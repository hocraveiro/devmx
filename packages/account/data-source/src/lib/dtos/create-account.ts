import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { AccountDto } from './account';

export class CreateAccountDto implements Creatable<AccountDto> {
  @IsString()
  @ApiProperty()
  name: string;

  presentations: PresentationDto[] = [];
}
