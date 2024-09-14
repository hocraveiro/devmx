import { Creatable, Gender, Role } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { PresentationDto } from './presentation';
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
  @ApiPropertyOptional({
    type: 'enum',
    enum: [
      'male',
      'female',
      'non-binary',
      'gender-fluid',
      'agender',
      'other',
      'prefer-not-to-say',
    ],
    default: 'prefer-not-to-say',
  })
  gender?: Gender;

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

  roles: Record<Role, boolean>

  active: boolean;

  presentations: PresentationDto[] = [];
}
