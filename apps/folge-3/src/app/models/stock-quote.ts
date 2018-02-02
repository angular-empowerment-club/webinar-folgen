import { StockQuoteDetails } from './stock-quote-details';

export interface StockQuote {
  symbol: string;
  company: string;
  last: number;
  details: StockQuoteDetails;
}
