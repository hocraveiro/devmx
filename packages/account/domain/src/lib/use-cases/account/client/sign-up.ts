import { SignUp, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../../../services';
import { Profile } from '../../../dtos/profile';

export class SignUpClientUseCase implements UseCase<SignUp, Profile> {
  constructor(private readonly authService: AuthService) {}

  execute(data: SignUp) {
    return this.authService.signUp(data);
  }
}
