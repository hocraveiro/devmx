import { SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { AccountDto } from '../dtos';
import {
  SignInServerUseCase,
  SignUpServerUseCase,
} from '@devmx/account-domain';

export class AuthenticationFacade {
  constructor(
    private readonly signUpUseCase: SignUpServerUseCase,
    private readonly signInUseCase: SignInServerUseCase
  ) {}

  async signUp(data: SignUp) {
    const account = await this.signUpUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  async signIn(data: SignIn) {
    return this.signInUseCase.execute(data);
  }
}
