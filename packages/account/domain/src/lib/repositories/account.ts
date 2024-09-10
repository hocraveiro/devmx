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
import { Account } from '../entities';

export abstract class AccountRepository
  implements
    CreateRepository<Account>,
    FindRepository<Account>,
    FindOneRepository<Account>,
    UpdateRepository<Account>,
    RemoveRepository
{
  abstract create(data: Creatable<Account>): Promise<Account>;

  abstract find(options: FindOptions<Account>): Promise<Page<Account>>;

  abstract findOne(where: FindWhere<Account>): Promise<Account | null>;

  abstract update(data: Updatable<Account>): Promise<Account | null>;

  abstract remove(id: string): Promise<void>;
}
