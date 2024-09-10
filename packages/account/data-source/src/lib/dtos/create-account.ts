import { Creatable } from '@devmx/shared-api-interfaces';
import { AccountEntity } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAccountDto implements Creatable<AccountEntity> {
  @IsString()
  @ApiProperty()
  name: string;
}
