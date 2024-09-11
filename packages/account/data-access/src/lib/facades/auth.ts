import {
  SignInClientUseCase,
  SignUpClientUseCase,
} from '@devmx/account-domain';
import { SignUp } from '@devmx/shared-api-interfaces';
import { Facade } from '@devmx/shared-data-access';
import { take } from 'rxjs';

export interface AuthUser {
  firstName: string;
  username: string;
  email: string;
}

interface AuthState {
  user: AuthUser | null;
}

export class AuthFacade extends Facade<AuthState> {
  user$ = this.select((state) => state.user);

  constructor(
    private readonly signUpUseCase: SignUpClientUseCase,
    private readonly signInUseCase: SignInClientUseCase
  ) {
    super({ user: null });
  }

  signUp(data: SignUp) {
    const signUp$ = this.signUpUseCase.execute(data).pipe(take(1));

    signUp$.subscribe()
  }
}
