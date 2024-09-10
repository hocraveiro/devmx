import { PageDto, PageMetaDto } from '@devmx/shared-data-source';
import { EventRepository } from '@devmx/events-domain';
import { EventEntity } from '../entities';
import { Repository } from 'typeorm';
import {
  FindWhere,
  FindOptions,
  Updatable,
  Creatable,
} from '@devmx/shared-api-interfaces';

export class EventRepositoryImpl implements EventRepository {
  constructor(private readonly repository: Repository<EventEntity>) {}

  create(data: Creatable<EventEntity>) {
    return this.repository.save(data);
  }

  async findOne(where: FindWhere<EventEntity>) {
    return this.repository.findOne({ where });
  }

  async update(data: Updatable<EventEntity>) {
    return this.repository.save(data);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }

  async find({ page, where }: FindOptions<EventEntity>) {
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
