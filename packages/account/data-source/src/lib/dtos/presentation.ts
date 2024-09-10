import { Presentation } from '@devmx/account-domain';
import { ApiProperty } from '@nestjs/swagger';

export class PresentationDto implements Presentation {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
