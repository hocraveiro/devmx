import { PageOptions, SortOrder } from '@devmx/shared/api-interfaces';
import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PageOptionsDto implements PageOptions {
  @ApiPropertyOptional({ enum: ['ASC', 'DESC'], default: 'ASC' })
  @IsOptional()
  readonly order: SortOrder = 'ASC';

  @IsInt()
  @Min(1)
  @IsOptional()
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  readonly page: number = 1;

  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  readonly take: number = 10;

  get skip() {
    return (this.page - 1) * this.take;
  }
}
