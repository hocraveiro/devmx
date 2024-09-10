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
import { Event } from '../entities';

export abstract class EventRepository
  implements
    CreateRepository<Event>,
    FindRepository<Event>,
    FindOneRepository<Event>,
    UpdateRepository<Event>,
    RemoveRepository
{
  abstract create(data: Creatable<Event>): Promise<Event>;

  abstract find(options: FindOptions<Event>): Promise<Page<Event>>;

  abstract findOne(where: FindWhere<Event>): Promise<Event | null>;

  abstract update(data: Updatable<Event>): Promise<Event | null>;

  abstract remove(id: string): Promise<void>;
}
