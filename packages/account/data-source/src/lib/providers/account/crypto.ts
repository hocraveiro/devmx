import { NestProvider, Type } from '@devmx/shared-api-interfaces';
import { CryptoService } from '@devmx/account-domain';

export function provideCryptoServiceImpl(
  CryptoServiceImpl: Type<CryptoService>
): NestProvider {
  return {
    provide: CryptoService,
    useClass: CryptoServiceImpl,
  };
}
