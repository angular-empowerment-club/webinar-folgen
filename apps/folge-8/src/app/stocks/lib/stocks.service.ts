import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AlphavantageStocks } from '../../core/';
import { StockQuote } from '../models';
import { StockQuoteBatchMap } from './stock-quote-batch.map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Stocks {
  private _apiRoot = 'http://localhost:3000/stocks';

  constructor(
    private _http: HttpClient,
    private _alphavantage: AlphavantageStocks,
    private _mapper: StockQuoteBatchMap
  ) {}

  loadSymbolsFromAlphavantage(symbols: string): Observable<StockQuote[]> {
    return this._alphavantage
      .getBySymbols(symbols)
      .pipe(map(stocksFromApi => this._mapper.execute(stocksFromApi)));
  }

  watch(stockQuote: StockQuote) {
    return this._http.post(this._apiRoot, stockQuote);
  }
}
