import { SignUp } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpDto implements SignUp {
  @IsString()
  @ApiProperty({ example: '' })
  firstName: string;

  @IsString()
  @ApiProperty({ example: '' })
  lastName: string;

  @IsEmail()
  @ApiProperty({ example: '' })
  email: string;

  @IsString()
  @ApiProperty({ example: '' })
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '' })
  password: string;
}
