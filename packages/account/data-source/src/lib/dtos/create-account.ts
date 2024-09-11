import { Creatable } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { AccountDto } from './account';

export class CreateAccountDto implements Creatable<AccountDto> {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  photo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(512)
  @ApiPropertyOptional()
  minibio?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  birthday?: string;

  active: boolean;

  presentations: PresentationDto[] = [];
}
