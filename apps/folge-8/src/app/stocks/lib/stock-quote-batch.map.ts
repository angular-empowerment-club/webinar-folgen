import { Injectable } from '@angular/core';

import {
  StockQuoteBatchFromApi,
  StockQuoteFromApi
} from '../../core/alphavantage/api';
import { StockQuote, StockQuoteRisk } from '../models';

@Injectable()
export class StockQuoteBatchMap {
  execute(batch: StockQuoteBatchFromApi): StockQuote[] {
    return batch['Stock Quotes'].map(s => this.toStockQuote(s));
  }

  private toStockQuote(fromApi: StockQuoteFromApi): StockQuote {
    return {
      symbol: fromApi['1. symbol'],
      last: +fromApi['2. price'],
      company: '',
      details: {
        nextEarnings: new Date(),
        lastUpdateOn: new Date(fromApi['4. timestamp'])
      },
      risk: StockQuoteRisk.NotRated
    };
  }
}
