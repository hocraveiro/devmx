import { Page } from '@devmx/shared/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta';
import { IsArray } from 'class-validator';

export class PageDto<T> implements Page<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ type: () => PageMetaDto })
  readonly meta: PageMetaDto;

  constructor(data: T[], meta: PageMetaDto) {
    this.data = data;
    this.meta = meta;
  }
}
