import { JwtService, CryptoService } from '../../../services';
import { AccountRepository } from '../../../repositories';
import {
  SignIn,
  UseCase,
  AccessToken,
  EnvServerJwt,
} from '@devmx/shared-api-interfaces';

export class SignInServerUseCase implements UseCase<SignIn, AccessToken> {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
    private readonly envServerJwt: EnvServerJwt
  ) {}

  async execute(data: SignIn) {
    const account = await this.accountRepository.findOne({
      username: data.username,
    });

    if (!account) {
      throw new Error('Credenciais inválidas');
    }

    const confirmedPassword = this.cryptoService.compare(
      data.password,
      account.password
    );

    if (!confirmedPassword) {
      throw new Error('Credenciais inválidas');
    }

    const authUser = {
      firstName: account.firstName,
      username: account.username,
      roles: account.roles,
      email: account.email,
      sub: account.id,
    };

    const accessToken = await this.jwtService.signAsync(authUser, {
      secret: this.envServerJwt.secret,
    });

    return { accessToken };
  }
}
