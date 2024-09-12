import { AngularProvider } from '@devmx/shared-api-interfaces';
import { AuthFacade } from '../../facades';
import {
  GetAuthAccountClientUseCase,
  SignInClientUseCase,
  SignUpClientUseCase,
} from '@devmx/account-domain';

export function provideAuthFacade(): AngularProvider {
  return {
    provide: AuthFacade,
    useFactory(
      signUp: SignUpClientUseCase,
      signIn: SignInClientUseCase,
      getAuthAccount: GetAuthAccountClientUseCase
    ) {
      return new AuthFacade(signUp, signIn, getAuthAccount);
    },
    deps: [SignUpClientUseCase, SignInClientUseCase, GetAuthAccountClientUseCase],
  };
}
