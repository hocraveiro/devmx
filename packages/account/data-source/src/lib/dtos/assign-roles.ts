import { IsArray, IsString } from 'class-validator';
import { AssignRoles } from '@devmx/account-domain';
import { Role } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class AssignRolesDto implements AssignRoles {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsArray()
  roles: Role[];
}
