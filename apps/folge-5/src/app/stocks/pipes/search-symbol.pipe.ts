import { Pipe, PipeTransform } from '@angular/core';

import { StockQuote } from '../models';

@Pipe({
  name: 'searchSymbol'
})
export class SearchSymbolPipe implements PipeTransform {
  transform(stocks: StockQuote[], symbolQuery: string): StockQuote[] {
    if (!stocks || !symbolQuery) {
      return stocks;
    }

    return stocks.filter(stock => l(stock.symbol).indexOf(l(symbolQuery)) > -1);
  }
}

/**
 * Shortcut to lowercase a string value
 * @param text that is going to be lower cased
 */
function l(text: string) {
  return text.toLocaleLowerCase();
}
