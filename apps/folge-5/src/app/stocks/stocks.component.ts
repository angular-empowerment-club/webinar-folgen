import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';

import { StockQuote, StockQuoteRisk } from './models';

@Component({
  selector: 'aec-stocks',
  templateUrl: './stocks.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(100, style({ opacity: 1, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class StocksComponent {
  symbolQuery: string;
  riskWhiteList: string[];

  stockQoutes: StockQuote[] = [
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

  updateRisk(stock: StockQuote, risk: StockQuoteRisk) {
    stock.risk = risk;
  }

  updateRiskWhiteList(riskWhiteList: string[]) {
    this.riskWhiteList = riskWhiteList;
  }

  updateSymbolQuery(symbolQuery: string) {
    this.symbolQuery = symbolQuery;
  }

  removeStockQuoteFromList(stockQuote: StockQuote) {
    this.stockQoutes = this.stockQoutes.filter(
      s => s.symbol !== stockQuote.symbol
    );
  }
}
