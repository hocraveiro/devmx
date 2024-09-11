import { SignUp, AccessToken, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../../../services';

export class SignUpClientUseCase implements UseCase<SignUp, AccessToken> {
  constructor(private readonly authService: AuthService) {}

  execute(data: SignUp) {
    return this.authService.signUp(data);
  }
}
