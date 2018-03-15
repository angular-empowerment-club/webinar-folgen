import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
import { Modal } from '../lib/modal/modal';
import { ModalCleanser } from '../lib/modal/modal-cleanser';
import { AlphavantageStocks } from './alphavantage/aplhavantage.service';
import { AppErrorHandler } from './app-error-handler';
import { ALPHAVANTAGE_API_KEY } from './app-options';
import { AttachAlphavantageApiKey } from './interceptors/attach-alphavantage-api-key.interceptor';
import { HandleErrorsInterceptor } from './interceptors/handle-errors.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AlphavantageStocks,
    { provide: ErrorHandler, useFactory(modal, cleanser) { return new AppErrorHandler(modal, cleanser); }, deps: [Modal, ModalCleanser] },
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
