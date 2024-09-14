import { IsArray, IsString } from 'class-validator';
import { AssignRoles } from '@devmx/account-domain';
import { Role } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class AssignRolesDto implements AssignRoles {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({
    type: 'array',
    enum: ['member', 'leader', 'staff', 'heroe', 'speaker', 'director'],
    default: ['member']
  })
  @IsArray()
  roles: Record<Role, boolean>;
}
