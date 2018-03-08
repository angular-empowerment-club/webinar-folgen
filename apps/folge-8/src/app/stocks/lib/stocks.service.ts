import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

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

  watch(stockQuote: StockQuote): Observable<any> {
    return this._http.post(this._apiRoot, stockQuote);
  }

  update(stockQuote: StockQuote): Observable<any> {
    return this._http.put(this._apiRoot, stockQuote);
  }

  getSingle(symbol: string): Observable<boolean> {
    return this._http
      .get<boolean>(`${this._apiRoot}/${symbol}`, { observe: 'response' })
      .pipe(
        tap(response => {
          if (response.status === 204) {
            throw new Error(`No stock quote was found (Symbol: ${symbol})`);
          }
        }),
        map(response => response.body)
      )
  }
}
