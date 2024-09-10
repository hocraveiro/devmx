import { Account } from '@devmx/account/domain';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto implements Account {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
