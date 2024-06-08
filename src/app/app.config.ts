import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { QueryClient, provideAngularQuery } from '@tanstack/angular-query-experimental';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAngularQuery(new QueryClient()),
    provideHttpClient(withFetch())
  ]
};
