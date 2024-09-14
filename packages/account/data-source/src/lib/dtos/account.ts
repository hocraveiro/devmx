import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender, Role } from '@devmx/shared-api-interfaces';
import { Account } from '@devmx/account-domain';
import { today } from '@devmx/shared-util-data';
import { Exclude } from 'class-transformer';

export class AccountDto implements Account {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'guiseek' })
  username: string;

  @Exclude()
  password: string;

  @ApiProperty({ example: 'nome@devpr.org' })
  email: string;

  @ApiProperty({ example: 'Guilherme' })
  firstName: string;

  @ApiProperty({ example: 'Siquinelli' })
  lastName: string;

  @ApiPropertyOptional({
    example: 'male',
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
  })
  gender?: Gender;

  @ApiPropertyOptional({ example: '' })
  photo?: string;

  @ApiPropertyOptional({ example: '' })
  minibio?: string;

  @ApiPropertyOptional({ example: '1986-12-29T00:00:00.000Z' })
  birthday?: string;

  @Exclude()
  roles: Record<Role, boolean>;

  @Exclude()
  active: boolean;

  @ApiProperty({ example: today().toISOString() })
  createdAt: Date;

  @ApiProperty({ example: today().toISOString() })
  updatedAt: Date;
}
