import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { environment } from '../../environments/environment';
import { AlphavantageStocks } from './alphavantage/aplhavantage.service';
import { ALPHAVANTAGE_API_KEY } from './app-options';
import { AttachAlphavantageApiKey } from './interceptors/attach-alphavantage-api-key.interceptor';
import { HandleErrorsInterceptor } from './interceptors/handle-errors.interceptor';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AlphavantageStocks,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AttachAlphavantageApiKey,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorsInterceptor,
      multi: true
    },
    {
      provide: ALPHAVANTAGE_API_KEY,
      useValue: environment.alphavantageApiKey
    }
  ]
})
export class CoreModule {}
