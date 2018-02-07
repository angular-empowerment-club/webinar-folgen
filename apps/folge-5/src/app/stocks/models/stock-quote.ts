import { StockQuoteDetails } from './stock-quote-details';
import { StockQuoteRisk } from './stock-quote-risk';

export interface StockQuote {
  symbol: string;
  company: string;
  last: number;
  details: StockQuoteDetails;
  risk: StockQuoteRisk;
}
