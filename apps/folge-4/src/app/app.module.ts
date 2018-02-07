import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { UpperOrLowercasePipe } from './pipes/upper-or-lowercase.pipe';

import { StockRiskSwitcherComponent } from './stock-risk-switcher/stock-risk-switcher.component';
import { RiskBadgeComponent } from './stock-risk-badge/stock-risk-badge.component';
import { StockRiskFilterComponent } from './stock-risk-filter/stock-risk-filter.component';
import { RestrictStocksPipe } from './pipes/restrict-stocks.pipe';

import localeDe from '@angular/common/locales/de';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { SearchSymbolPipe } from './pipes/search-symbol.pipe';
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
