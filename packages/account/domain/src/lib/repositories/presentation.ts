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
import { Presentation } from '../entities';

export abstract class PresentationRepository
  implements
    CreateRepository<Presentation>,
    FindRepository<Presentation>,
    FindOneRepository<Presentation>,
    UpdateRepository<Presentation>,
    RemoveRepository
{
  abstract create(data: Creatable<Presentation>): Promise<Presentation>;

  abstract find(
    options: FindOptions<Presentation>
  ): Promise<Page<Presentation>>;

  abstract findOne(
    where: FindWhere<Presentation>
  ): Promise<Presentation | null>;

  abstract update(data: Updatable<Presentation>): Promise<Presentation | null>;

  abstract remove(id: string): Promise<void>;
}
