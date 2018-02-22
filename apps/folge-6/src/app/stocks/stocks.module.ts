import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Options } from './core/app-options';
import { Dependency } from './core/dependency.service';
import { PushStocks } from './core/push-stocks.service';
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

const STOCKS_PROVIDER: Provider = {
  provide: Stocks,
  useClass: Stocks
};

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, FormsModule],
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
    // STOCKS_PROVIDER,
    Dependency,
    PushStocks,
    {
      provide: Stocks,
      useExisting: PushStocks
    },
    Options
  ]
})
export class StocksModule {}
