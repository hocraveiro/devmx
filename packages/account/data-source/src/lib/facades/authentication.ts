import { CheckUsername, SignIn, SignUp } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { AccountDto } from '../dtos';
import {
  SignInServerUseCase,
  SignUpServerUseCase,
  CheckUsernameServerUseCase,
} from '@devmx/account-domain';

export class AuthenticationFacade {
  constructor(
    private readonly signUpUseCase: SignUpServerUseCase,
    private readonly signInUseCase: SignInServerUseCase,
    private readonly checkUsernameUseCase: CheckUsernameServerUseCase
  ) {}

  async signUp(data: SignUp) {
    const account = await this.signUpUseCase.execute(data);
    return plainToInstance(AccountDto, account);
  }

  async signIn(data: SignIn) {
    return this.signInUseCase.execute(data);
  }

  async checkUsername(data: CheckUsername) {
    return this.checkUsernameUseCase.execute(data);
  }
}
