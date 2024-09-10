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
import { RSVP } from '../entities';

export abstract class RSVPRepository
  implements
    CreateRepository<RSVP>,
    FindRepository<RSVP>,
    FindOneRepository<RSVP>,
    UpdateRepository<RSVP>,
    RemoveRepository
{
  abstract create(data: Creatable<RSVP>): Promise<RSVP>;

  abstract find(options: FindOptions<RSVP>): Promise<Page<RSVP>>;

  abstract findOne(where: FindWhere<RSVP>): Promise<RSVP | null>;

  abstract update(data: Updatable<RSVP>): Promise<RSVP | null>;

  abstract remove(id: string): Promise<void>;
}
