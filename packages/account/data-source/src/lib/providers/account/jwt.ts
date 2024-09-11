import { JwtService } from '@devmx/account-domain';
import { NestProvider, Type } from '@devmx/shared-api-interfaces';

export function provideJwtServiceImpl(
  JwtServiceImpl: Type<JwtService>
): NestProvider {
  return {
    provide: JwtService,
    useClass: JwtServiceImpl,
  };
}
