import { StockQuoteBatchFromApi } from "./stock-quote-batch-from-api";
import { StockQuote, StockQuoteRisk } from "../../models";
import { StockQuoteFromApi } from "./stock-quote-from-api";
import { Injectable } from "@angular/core";

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
