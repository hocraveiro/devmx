import { CheckUsername } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CheckUsernameDto implements CheckUsername {
  @IsString()
  @ApiProperty()
  username: string;
}
