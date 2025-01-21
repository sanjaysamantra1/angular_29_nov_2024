import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { loaderInterceptor } from './interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(withInterceptors([loggerInterceptor,tokenInterceptor,retryInterceptor,loaderInterceptor])),
  ]
};
