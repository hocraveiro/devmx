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
import { PresentationLike } from '../entities';

export abstract class PresentationLikeRepository
  implements
    CreateRepository<PresentationLike>,
    FindRepository<PresentationLike>,
    FindOneRepository<PresentationLike>,
    UpdateRepository<PresentationLike>,
    RemoveRepository
{
  abstract create(data: Creatable<PresentationLike>): Promise<PresentationLike>;

  abstract find(
    options: FindOptions<PresentationLike>
  ): Promise<Page<PresentationLike>>;

  abstract findOne(
    where: FindWhere<PresentationLike>
  ): Promise<PresentationLike | null>;

  abstract update(
    data: Updatable<PresentationLike>
  ): Promise<PresentationLike | null>;

  abstract remove(id: string): Promise<void>;
}
