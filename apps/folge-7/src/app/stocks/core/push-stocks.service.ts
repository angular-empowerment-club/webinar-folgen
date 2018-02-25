import { Injectable, Inject, Optional } from '@angular/core';
import { StockQuote } from '../models';
import { OPTIONS } from './app-options';

@Injectable()
export class PushStocks {
  constructor(
    @Optional()
    @Inject(OPTIONS)
    options
  ) {
    console.log(options);
  }

  /* Imagine stocks are loaded via ws */
  all(): StockQuote[] {
    return [];
  }
}
