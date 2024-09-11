import { Entity, FindOptions, FindWhere } from '@devmx/shared-api-interfaces';
import { PageDto, PageMetaDto } from '../dtos';
import { Repository } from 'typeorm';

export abstract class ReadableRepository<T extends Entity> {
  constructor(protected repository: Repository<Entity | T>) {}

  async findOne(where: FindWhere<T>) {
    return this.repository.findOne({ where });
  }

  async find({ page, where }: FindOptions<T>) {
    let query = this.repository.createQueryBuilder();

    query.orderBy(`createdAt`, page.order).skip(page.skip).take(page.take);

    if (where) {
      query = query.where(where);
    }

    const count = await query.getCount();
    const { entities } = await query.getRawAndEntities();

    const meta = new PageMetaDto({ page, count });

    return new PageDto(entities, meta);
  }
}
