import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StockQuoteBatchFromApi } from './api/stock-quote-batch-from-api';

@Injectable()
export class AlphavantageStocks {
  apiRoot = 'https://www.alphavantage.co';

  constructor(private http: HttpClient) { }

  getBySymbols(symbols: string): Observable<any> {
    return this.http.get<StockQuoteBatchFromApi>(
      `${this.apiRoot}/query?function=BATCH_STOCK_QUOTES&symbols=${symbols}`)
  }
}
