import { AuthAccount } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';

export abstract class AccountService {
  abstract getAuthAccount(): Observable<AuthAccount>;
}
