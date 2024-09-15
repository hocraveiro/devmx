import {
  CryptoService,
  JwtService,
  AccountRepository,
  FindAccountsServerUseCase,
  FindOneAccountServerUseCase,
  UpdateAccountServerUseCase,
  RemoveAccountServerUseCase,
  CreateAccountServerUseCase,
  SignUpServerUseCase,
  SignInServerUseCase,
  CheckUsernameServerUseCase,
  UpdateAccountPasswordServerUseCase,
} from '@devmx/account-domain';
import { EnvServer } from '@devmx/shared-data-source';

export function provideCreateAccountServerUseCase() {
  return {
    provide: CreateAccountServerUseCase,
    useFactory(account: AccountRepository) {
      return new CreateAccountServerUseCase(account);
    },
    inject: [AccountRepository],
  };
}

export function provideFindAccountsServerUseCase() {
  return {
    provide: FindAccountsServerUseCase,
    useFactory(repository: AccountRepository) {
      return new FindAccountsServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideFindOneAccountServerUseCase() {
  return {
    provide: FindOneAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new FindOneAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideUpdateAccountServerUseCase() {
  return {
    provide: UpdateAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new UpdateAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideRemoveAccountServerUseCase() {
  return {
    provide: RemoveAccountServerUseCase,
    useFactory(repository: AccountRepository) {
      return new RemoveAccountServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideSignUpServerUseCase() {
  return {
    provide: SignUpServerUseCase,
    useFactory(repository: AccountRepository, crypto: CryptoService) {
      return new SignUpServerUseCase(repository, crypto);
    },
    inject: [AccountRepository, CryptoService],
  };
}

export function provideSignInServerUseCase() {
  return {
    provide: SignInServerUseCase,
    useFactory(
      repository: AccountRepository,
      jwt: JwtService,
      crypto: CryptoService,
      envServer: EnvServer
    ) {
      return new SignInServerUseCase(repository, jwt, crypto, envServer.jwt);
    },
    inject: [AccountRepository, JwtService, CryptoService, EnvServer],
  };
}

export function provideCheckUsernameServerUseCase() {
  return {
    provide: CheckUsernameServerUseCase,
    useFactory(repository: AccountRepository) {
      return new CheckUsernameServerUseCase(repository);
    },
    inject: [AccountRepository],
  };
}

export function provideUpdateAccountPasswordServerUseCase() {
  return {
    provide: UpdateAccountPasswordServerUseCase,
    useFactory(repository: AccountRepository, crypto: CryptoService) {
      return new UpdateAccountPasswordServerUseCase(repository, crypto);
    },
    inject: [AccountRepository, CryptoService],
  };
}
