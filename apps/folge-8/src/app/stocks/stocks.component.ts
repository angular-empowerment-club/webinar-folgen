import { Component, OnInit } from '@angular/core';

import { Stocks } from './core/stocks.service';
import { StockQuote, StockQuoteRisk } from './models';
import { fadeStockQuotes } from './stocks.animations';

@Component({
  selector: 'aec-stocks',
  templateUrl: './stocks.component.html',
  animations: [fadeStockQuotes]
})
export class StocksComponent implements OnInit {
  symbolQuery: string;
  riskWhiteList: string[];
  stockQoutes: StockQuote[];

  constructor(private stocks: Stocks) {}

  ngOnInit() {
    this.stocks
      .getBySymbols('msft,tsla,aapl,fb')
      .subscribe(stockQuotes => this.stockQoutes = stockQuotes);
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
