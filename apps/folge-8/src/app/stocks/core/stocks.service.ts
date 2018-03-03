import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StockQuoteRisk } from '../models';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';
import { StockQuoteBatchFromApi } from './api/stock-quote-batch-from-api';
import { StockQuoteBatchMap } from './api/stock-quote-batch.map';

@Injectable()
export class Stocks {
  apiRoot = 'https://www.alphavantage.co';

  constructor(private http: HttpClient, private mapper: StockQuoteBatchMap) { }

  getBySymbols(symbols: string): Observable<any> {
    return this.http.get<StockQuoteBatchFromApi>(
      `${this.apiRoot}/query?function=BATCH_STOCK_QUOTES&symbols=${symbols}`
    , { observe: 'response' }).pipe(
      map(response => response.body),
      map(stocksFromApi => this.mapper.execute(stocksFromApi))
    );
  }

  all() {
    return [
      {
        symbol: 'tsla',
        company: 'Tesla Inc',
        last: 285,
        risk: StockQuoteRisk.NotRated,
        details: {
          lastUpdateOn: new Date(2018, 0, 17, 21, 29),
          nextEarnings: new Date(2018, 1, 28)
        }
      },
      {
        symbol: 'aapl',
        company: 'Apple',
        last: 650,
        risk: StockQuoteRisk.NotRated,
        details: {
          lastUpdateOn: new Date(2018, 0, 17, 21, 29),
          nextEarnings: new Date(2018, 1, 28)
        }
      }
    ];
  }
}
