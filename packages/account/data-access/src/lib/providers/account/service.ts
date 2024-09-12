import { AccountServiceImpl, AuthServiceImpl } from '../../services';
import { AccountService, AuthService } from '@devmx/account-domain';
import { EnvClient, HttpClient } from '@devmx/shared-data-access';
import { AngularProvider } from '@devmx/shared-api-interfaces';

export function provideAuthService(): AngularProvider {
  return {
    provide: AuthService,
    useFactory(httpClient: HttpClient, env: EnvClient) {
      return new AuthServiceImpl(httpClient, env);
    },
    deps: [HttpClient, EnvClient],
  };
}

export function provideAccountService(): AngularProvider {
  return {
    provide: AccountService,
    useFactory(httpClient: HttpClient, env: EnvClient) {
      return new AccountServiceImpl(httpClient, env);
    },
    deps: [HttpClient, EnvClient],
  };
}
