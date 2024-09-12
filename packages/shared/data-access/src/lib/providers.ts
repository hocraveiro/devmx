import { AngularProvider, Type } from '@devmx/shared-api-interfaces';
import { EnvClient, HttpClient } from './ports';

export function provideHttpClientImpl<T>(
  HttpClientImpl: Type<T>
): AngularProvider {
  return {
    provide: HttpClient,
    useClass: HttpClientImpl,
  };
}

export function provideEnvClient(value: EnvClient): AngularProvider {
  return {
    provide: EnvClient,
    useValue: value,
  };
}
