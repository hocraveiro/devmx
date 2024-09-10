import { PageDto, PageMetaDto } from '@devmx/shared-data-source';
import { PresentationRepository } from '@devmx/account-domain';
import { PresentationEntity } from '../entities';
import { Repository } from 'typeorm';
import {
  FindWhere,
  FindOptions,
  Updatable,
  Creatable,
} from '@devmx/shared-api-interfaces';

export class PresentationRepositoryImpl implements PresentationRepository {
  constructor(private readonly repository: Repository<PresentationEntity>) {}

  create(data: Creatable<PresentationEntity>) {
    return this.repository.save(data);
  }

  async findOne(where: FindWhere<PresentationEntity>) {
    return this.repository.findOne({ where });
  }

  async update(data: Updatable<PresentationEntity>) {
    return this.repository.save(data);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }

  async find({ page, where }: FindOptions<PresentationEntity>) {
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
