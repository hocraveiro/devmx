import { AngularProvider, Type } from '@devmx/shared-api-interfaces';
import { HttpClient } from './ports';

export function provideHttpClientImpl<T>(
  HttpClientImpl: Type<T>
): AngularProvider {
  return {
    provide: HttpClient,
    useClass: HttpClientImpl,
  };
}
