import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  withFetch,
  HttpClient,
  withInterceptors,
  provideHttpClient,
} from '@angular/common/http';
import {
  PLATFORM_ID,
  ErrorHandler,
  ApplicationConfig,
  provideZoneChangeDetection,
  ENVIRONMENT_INITIALIZER,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { providePlatformSide } from '@devmx/shared-util-data';
import { authInterceptor } from './interceptors';
import { AuthErrorHandler } from './handlers';
import { LOCALE_ID } from '@angular/core';
import { appRoutes } from './app.routes';
import { env } from '../envs/env';
import {
  provideEnvClient,
  provideHttpClientImpl,
} from '@devmx/shared-data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withViewTransitions()),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useFactory(platformId: string) {
        return providePlatformSide(platformId);
      },
      deps: [PLATFORM_ID],
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler,
    },
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideHttpClientImpl(HttpClient),
    provideEnvClient(env),
  ],
};
