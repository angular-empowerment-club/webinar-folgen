import { InjectionToken, Provider } from '@angular/core';

export const OPTIONS = new InjectionToken<AppOptions>('Application-Options');

export class AppOptions {
  apiPath = '/api/stock-quotes/';
  requestTimeoutInMs = 5000;
  retryCount = 3;
}

export const Options: Provider = {
  provide: OPTIONS,
  useValue: new AppOptions()
};
