import { SignIn, SignUp, AuthAccount } from '@devmx/shared-api-interfaces';
import { Facade } from '@devmx/shared-data-access';
import {
  GetAuthAccountClientUseCase,
  SignInClientUseCase,
  SignOutClientUseCase,
  SignUpClientUseCase,
} from '@devmx/account-domain';
import { skip, take } from 'rxjs';

interface AuthState {
  user: AuthAccount | null;
  authenticated: boolean;
}

export class AuthFacade extends Facade<AuthState> {
  user$ = this.select((state) => state.user);

  authenticated$ = this.select((state) => state.authenticated).pipe(skip(1));

  constructor(
    private readonly signUpUseCase: SignUpClientUseCase,
    private readonly signInUseCase: SignInClientUseCase,
    private readonly getAuthAccountUseCase: GetAuthAccountClientUseCase,
    private readonly signOut: SignOutClientUseCase
  ) {
    super({ user: null, authenticated: false });
  }

  signUp(data: SignUp) {
    const signUp$ = this.signUpUseCase.execute(data).pipe(take(1));

    signUp$.subscribe();
  }

  signIn(data: SignIn) {
    const signIn$ = this.signInUseCase.execute(data).pipe(take(1));

    signIn$.subscribe(() => this.getAuthUser());
  }

  getAuthUser() {
    const getAuthUser$ = this.getAuthAccountUseCase.execute().pipe(take(1));

    getAuthUser$.subscribe((user) => {
      this.setState({ user });

      if (user) {
        const authenticated = true;
        this.setState({ authenticated });
      }
    });
  }

  getOut() {
    const account$ = this.signOut.execute().pipe(take(1));

    account$.subscribe((user) => this.setState({ user }));
  }
}
