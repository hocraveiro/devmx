import { NestProvider } from '@devmx/shared-api-interfaces';
import { EnvServer } from './ports';

export function provideEnvServer(value: EnvServer): NestProvider {
  return {
    provide: EnvServer,
    useValue: value,
  };
}
