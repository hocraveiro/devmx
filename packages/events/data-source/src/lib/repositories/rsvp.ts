import { PageDto, PageMetaDto } from '@devmx/shared-data-source';
import { RSVPRepository } from '@devmx/events-domain';
import { RSVPEntity } from '../entities';
import { Repository } from 'typeorm';
import {
  FindWhere,
  FindOptions,
  Updatable,
  Creatable,
} from '@devmx/shared-api-interfaces';

export class RSVPRepositoryImpl implements RSVPRepository {
  constructor(private readonly repository: Repository<RSVPEntity>) {}

  create(data: Creatable<RSVPEntity>) {
    return this.repository.save(data);
  }

  async findOne(where: FindWhere<RSVPEntity>) {
    return this.repository.findOne({ where });
  }

  async update(data: Updatable<RSVPEntity>) {
    return this.repository.save(data);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }

  async find({ page, where }: FindOptions<RSVPEntity>) {
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
