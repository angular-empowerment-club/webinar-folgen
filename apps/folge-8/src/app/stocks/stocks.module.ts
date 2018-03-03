import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StockQuoteBatchMap } from './core/api/stock-quote-batch.map';
import { Stocks } from './core/stocks.service';
import { RestrictStocksPipe } from './pipes/restrict-stocks.pipe';
import { SearchSymbolPipe } from './pipes/search-symbol.pipe';
import { UpperOrLowercasePipe } from './pipes/upper-or-lowercase.pipe';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { RiskBadgeComponent } from './stock-risk-badge/stock-risk-badge.component';
import { StockRiskFilterComponent } from './stock-risk-filter/stock-risk-filter.component';
import { StockRiskSwitcherComponent } from './stock-risk-switcher/stock-risk-switcher.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StocksComponent } from './stocks.component';
import { AttachAlphavantageApiKey } from './core/interceptors/attach-alphavantage-api-key.interceptor';
import { environment } from '../../environments/environment';
import { ALPHAVANTAGE_API_KEY } from './core/app-options';

const STOCKS_PROVIDER: Provider = {
  provide: Stocks,
  useClass: Stocks
};

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, HttpClientModule],
  declarations: [
    StocksComponent,
    StockCardComponent,
    StockDetailsComponent,
    UpperOrLowercasePipe,
    StockRiskSwitcherComponent,
    RiskBadgeComponent,
    StockRiskFilterComponent,
    StockSearchComponent,
    RestrictStocksPipe,
    SearchSymbolPipe
  ],
  exports: [StocksComponent],
  providers: [
    STOCKS_PROVIDER,
    StockQuoteBatchMap,
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
export class StocksModule { }
