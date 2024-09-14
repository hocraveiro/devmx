import {
  Page,
  Updatable,
  FindWhere,
  AuthAccount,
  FindOptions,
} from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';
import { Account } from '../entities';

export abstract class AccountService {
  abstract getAuthAccount(): Observable<AuthAccount>;

  abstract find(options: FindOptions<Account>): Observable<Page<Account>>;

  abstract findOne(options: FindWhere<Account>): Observable<Account | null>;

  abstract update(value: Updatable<Account>): Observable<Account>;
}
