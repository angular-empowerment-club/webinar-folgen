import { Component, OnInit } from '@angular/core';

import { Stocks } from './lib/stocks.service';
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

  constructor(private _stocks: Stocks) {}

  ngOnInit() {
    this._stocks
      .loadSymbolsFromAlphavantage('msft,tsla,aapl,fb')
      .subscribe(stockQuotes => this.stockQoutes = stockQuotes);
  }

  updateRisk(stockQuote: StockQuote, risk: StockQuoteRisk) {
    stockQuote.risk = risk;
    this._stocks.update(stockQuote).subscribe();
  }

  updateRiskWhiteList(riskWhiteList: string[]) {
    this.riskWhiteList = riskWhiteList;
  }

  updateSymbolQuery(symbolQuery: string) {
    this.symbolQuery = symbolQuery;
  }

  addStockQuoteToWatchList(stockQuote: StockQuote) {
    this._stocks.watch(stockQuote).subscribe();
  }

  removeStockQuoteFromList(stockQuote: StockQuote) {
    this.stockQoutes = this.stockQoutes.filter(
      s => s.symbol !== stockQuote.symbol
    );
  }
}
