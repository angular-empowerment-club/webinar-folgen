import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibModule } from './lib/lib.module';
import { StocksModule } from './stocks/stocks.module';

registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibModule, StocksModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
