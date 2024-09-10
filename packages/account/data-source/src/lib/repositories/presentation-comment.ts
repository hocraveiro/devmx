import { PageDto, PageMetaDto } from '@devmx/shared-data-source';
import { PresentationCommentRepository } from '@devmx/account-domain';
import { PresentationCommentEntity } from '../entities';
import { Repository } from 'typeorm';
import {
  FindWhere,
  FindOptions,
  Updatable,
  Creatable,
} from '@devmx/shared-api-interfaces';

export class PresentationCommentRepositoryImpl
  implements PresentationCommentRepository
{
  constructor(
    private readonly repository: Repository<PresentationCommentEntity>
  ) {}

  create(data: Creatable<PresentationCommentEntity>) {
    return this.repository.save(data);
  }

  async findOne(where: FindWhere<PresentationCommentEntity>) {
    return this.repository.findOne({ where });
  }

  async update(data: Updatable<PresentationCommentEntity>) {
    return this.repository.save(data);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }

  async find({ page, where }: FindOptions<PresentationCommentEntity>) {
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
