import { SignIn, SignUp, AuthAccount } from '@devmx/shared-api-interfaces';
import { Facade } from '@devmx/shared-data-access';
import {
  GetAuthAccountClientUseCase,
  SignInClientUseCase,
  SignUpClientUseCase,
} from '@devmx/account-domain';
import { take } from 'rxjs';

interface AuthState {
  user: AuthAccount | null;
}

export class AuthFacade extends Facade<AuthState> {
  user$ = this.select((state) => state.user);

  constructor(
    private readonly signUpUseCase: SignUpClientUseCase,
    private readonly signInUseCase: SignInClientUseCase,
    private readonly getAuthAccountUseCase: GetAuthAccountClientUseCase
  ) {
    super({ user: null });
  }

  signUp(data: SignUp) {
    const signUp$ = this.signUpUseCase.execute(data).pipe(take(1));

    signUp$.subscribe();
  }

  signIn(data: SignIn) {
    const signIn$ = this.signInUseCase.execute(data).pipe(take(1));

    signIn$.subscribe();
  }

  getAuthUser() {
    const getAuthUser$ = this.getAuthAccountUseCase.execute().pipe(take(1));

    getAuthUser$.subscribe((user) => this.setState({ user }));
  }
}
