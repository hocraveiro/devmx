import { SignIn, SignUp, AccessToken } from '@devmx/shared-api-interfaces';
import { EnvClient, HttpClient } from '@devmx/shared-data-access';
import { AuthService, Profile } from '@devmx/account-domain';

export class AuthServiceImpl implements AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly env: EnvClient
  ) {}

  signIn(data: SignIn) {
    const url = `${this.env.api}/auth/sign-in`;
    return this.httpClient.post<AccessToken>(url, data);
  }

  signUp(data: SignUp) {
    const url = `${this.env.api}/auth/sign-up`;
    return this.httpClient.post<Profile>(url, data);
  }
}
