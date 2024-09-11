import { NestProvider } from '@devmx/shared-api-interfaces';
import { EnvServer } from './ports';

export function provideEnvServer(value: EnvServer): NestProvider {
  console.log(value);

  return {
    provide: EnvServer,
    useValue: value,
  };
}
