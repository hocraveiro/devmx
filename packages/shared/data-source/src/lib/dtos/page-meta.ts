import { PageMeta, PageMetaOptions } from '@devmx/shared/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class PageMetaDto implements PageMeta {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly take: number;

  @ApiProperty()
  readonly itemCount: number;

  @ApiProperty()
  readonly pageCount: number;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ page, count }: PageMetaOptions) {
    this.page = +page.page;
    this.take = +page.take;
    this.itemCount = count;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
