import { JwtService } from '@devmx/account-domain';
import { NestProvider, Type } from '@devmx/shared-api-interfaces';
import { JwtStrategy } from '../../strategies';
import { EnvServer } from '@devmx/shared-data-source';

export function provideJwtServiceImpl(
  JwtServiceImpl: Type<JwtService>
): NestProvider {
  return {
    provide: JwtService,
    useClass: JwtServiceImpl,
  };
}

export function provideJwtStrategy(): NestProvider {
  return {
    provide: JwtStrategy,
    useFactory(envServer: EnvServer) {
      return new JwtStrategy(envServer);
    },
    inject: [EnvServer],
  };
}
