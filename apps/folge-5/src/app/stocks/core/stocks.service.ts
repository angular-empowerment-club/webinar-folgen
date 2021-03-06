import { Injectable } from '@angular/core';

import { StockQuoteRisk } from '../models';

@Injectable()
export class Stocks {
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
