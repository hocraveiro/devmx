import { AccessToken, SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { Observable } from 'rxjs';
import { Account } from '../entities';

export abstract class AuthService {
  abstract signIn(data: SignIn): Observable<AccessToken>;

  abstract signUp(
    data: SignUp
  ): Observable<Omit<Account, 'password' | 'active'>>;
}
