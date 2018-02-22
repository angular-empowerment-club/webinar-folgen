import { Injectable, Inject } from '@angular/core';
import { StockQuote } from '../models';
import { OPTIONS } from './app-options';

@Injectable()
export class PushStocks {
  constructor(@Inject(OPTIONS) options) {
    console.log(options);
  }

  /* Imagine stocks are loaded via ws */
  all(): StockQuote[] {
    return [];
  }
}
