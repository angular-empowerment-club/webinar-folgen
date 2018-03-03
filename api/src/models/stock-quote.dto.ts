import { ApiModelProperty } from '@nestjs/swagger';

import { StockQuoteDetails } from './stock-quote-details.dto';
import { StockQuoteRisk } from './stock-quote-risk.dto';
import { Entity } from './entity';

export class StockQuote implements Entity {
  @ApiModelProperty({
    description: 'The unique identifier of a stock qoute'
  })
  symbol: string;

  @ApiModelProperty({
    description: 'The name of the company the stock belongs to.'
  })
  company: string;

  @ApiModelProperty({
    description: 'The last known price the stock was traded.'
  })
  last: number;

  @ApiModelProperty({
    description: 'Further information about the stock quote.'
  })
  details: StockQuoteDetails;

  @ApiModelProperty({
    description: 'The indicator given by the trader how risky this stock is.'
  })
  risk: StockQuoteRisk;

  get guid(): string {
    return this.symbol
  };
}
