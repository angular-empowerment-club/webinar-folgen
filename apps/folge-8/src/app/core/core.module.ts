import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
import { AlphavantageStocks } from './alphavantage/aplhavantage.service';
import { ALPHAVANTAGE_API_KEY } from './app-options';
import { AttachAlphavantageApiKey } from './interceptors/attach-alphavantage-api-key.interceptor';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    AlphavantageStocks,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AttachAlphavantageApiKey,
      multi: true
    },
    {
      provide: ALPHAVANTAGE_API_KEY,
      useValue: environment.alphavantageApiKey
    }
  ]
})
export class CoreModule {}
