import { PresentationReactionRepository } from '@devmx/account-domain';
import { PageDto, PageMetaDto } from '@devmx/shared-data-source';
import { PresentationReactionEntity } from '../entities';
import { Repository } from 'typeorm';
import {
  FindWhere,
  FindOptions,
  Creatable,
} from '@devmx/shared-api-interfaces';

export class PresentationReactionRepositoryImpl
  implements PresentationReactionRepository
{
  constructor(
    private readonly repository: Repository<PresentationReactionEntity>
  ) {}

  create(data: Creatable<PresentationReactionEntity>) {
    return this.repository.save(data);
  }

  async count(where: FindWhere<PresentationReactionEntity>) {
    return this.repository.countBy(where);
  }

  async findOne(where: FindWhere<PresentationReactionEntity>) {
    return this.repository.findOne({ where });
  }

  async remove(id: string) {
    this.repository.delete(id);
  }

  async find({ page, where }: FindOptions<PresentationReactionEntity>) {
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
