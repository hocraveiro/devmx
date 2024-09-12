import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  withFetch,
  HttpClient,
  withInterceptors,
  provideHttpClient,
} from '@angular/common/http';
import {
  PLATFORM_ID,
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { authInterceptor } from './interceptors';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { env } from '../envs/env';
import {
  provideEnvClient,
  provideHttpClientImpl,
} from '@devmx/shared-data-access';
import { providePlatformSide } from '@devmx/shared-util-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: APP_INITIALIZER,
      useFactory(platformId: string) {
        return providePlatformSide(platformId);
      },
      deps: [PLATFORM_ID],
    },
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideHttpClientImpl(HttpClient),
    provideEnvClient(env),
  ],
};
