import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { HttpClient } from '@devmx/shared-data-access';

export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  signIn(data: SignIn) {
    return this.httpClient.post('/api/account/sign-in', data);
  }

  signUp(data: SignUp) {
    return this.httpClient.post('/api/account/sign-up', data);
  }
}
