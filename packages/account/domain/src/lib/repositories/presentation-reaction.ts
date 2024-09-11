import {
  Page,
  FindWhere,
  Creatable,
  FindOptions,
  FindRepository,
  CreateRepository,
  RemoveRepository,
} from '@devmx/shared-api-interfaces';
import { PresentationReaction } from '../entities';

export abstract class PresentationReactionRepository
  implements
    CreateRepository<PresentationReaction>,
    FindRepository<PresentationReaction>,
    RemoveRepository
{
  abstract create(data: Creatable<PresentationReaction>): Promise<PresentationReaction>;

  abstract find(
    options: FindOptions<PresentationReaction>
  ): Promise<Page<PresentationReaction>>;

  abstract findOne(
    where: FindWhere<PresentationReaction>
  ): Promise<PresentationReaction | null>;

  abstract count(where: FindWhere<PresentationReaction>): Promise<number>;

  abstract remove(id: string): Promise<void>;
}
