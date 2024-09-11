import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { HttpClient } from '../ports';

export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  signIn(data: SignIn) {
    return this.httpClient.post('/api/account/sign-in', data);
  }

  signUp(data: SignUp) {
    return this.httpClient.post('/api/account/sign-up', data);
  }
}
