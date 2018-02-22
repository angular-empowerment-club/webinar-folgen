import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';

import { Stocks } from './core/stocks.service';
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
  stockQoutes: StockQuote[];

  constructor(private stocks: Stocks) {
    this.stockQoutes = stocks.all();
  }

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
