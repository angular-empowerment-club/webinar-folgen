import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, TypeProvider } from '@angular/core';

import { StocksModule } from './stocks/stocks.module';

import { AppComponent } from './app.component';

import localeDe from '@angular/common/locales/de';
import { UserService } from './user-service.service';
registerLocaleData(localeDe);

export function identifiedService(moduleName: string) {
  return () => new UserService(moduleName);
}

const Alias: TypeProvider = UserService;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StocksModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: Alias, useFactory: identifiedService('AppModule') }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
