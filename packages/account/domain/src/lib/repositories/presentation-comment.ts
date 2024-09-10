import {
  Page,
  FindWhere,
  Creatable,
  Updatable,
  FindOptions,
  FindRepository,
  CreateRepository,
  FindOneRepository,
  UpdateRepository,
  RemoveRepository,
} from '@devmx/shared-api-interfaces';
import { PresentationComment } from '../entities';

export abstract class PresentationCommentRepository
  implements
    CreateRepository<PresentationComment>,
    FindRepository<PresentationComment>,
    FindOneRepository<PresentationComment>,
    UpdateRepository<PresentationComment>,
    RemoveRepository
{
  abstract create(
    data: Creatable<PresentationComment>
  ): Promise<PresentationComment>;

  abstract find(
    options: FindOptions<PresentationComment>
  ): Promise<Page<PresentationComment>>;

  abstract findOne(
    where: FindWhere<PresentationComment>
  ): Promise<PresentationComment | null>;

  abstract update(
    data: Updatable<PresentationComment>
  ): Promise<PresentationComment | null>;

  abstract remove(id: string): Promise<void>;
}
