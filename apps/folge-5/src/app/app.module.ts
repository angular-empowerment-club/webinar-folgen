import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { StocksModule } from './stocks/stocks.module';

import { AppComponent } from './app.component';

import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StocksModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
