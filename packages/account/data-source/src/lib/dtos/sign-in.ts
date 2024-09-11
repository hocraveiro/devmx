import { SignIn } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class SignInDto implements SignIn {
  @IsString()
  @ApiProperty({ example: '' })
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '' })
  password: string;
}
