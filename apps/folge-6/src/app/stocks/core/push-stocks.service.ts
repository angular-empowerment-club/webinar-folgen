import { Injectable } from '@angular/core';
import { StockQuote } from '../models';

@Injectable()
export class PushStocks {

  /* Imagine stocks are loaded via ws */
  all(): StockQuote[] { return []; }
}
