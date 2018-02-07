import { Pipe, PipeTransform } from '@angular/core';

import { StockQuote, StockQuoteRisk } from '../models';

@Pipe({
  name: 'restrictStocks'
})
export class RestrictStocksPipe implements PipeTransform {
  transform(stocks: StockQuote[], allowedRisks: string[]): StockQuote[] {
    if (!stocks || !allowedRisks) { return []; }

    return stocks.filter(stock => {
      return allowedRisks.includes(stock.risk.toString())
    });
  }
}
