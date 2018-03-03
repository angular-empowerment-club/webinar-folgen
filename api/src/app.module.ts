import { Module } from '@nestjs/common';

import { DbContext } from './core';
import { StockQuote } from './models';
import { StocksController } from './stocks';

@Module({
  imports: [],
  controllers: [StocksController],
  components: [
    {
      provide: 'StocksContext',
      useFactory: () => new DbContext<StockQuote>(`${__dirname}/db/stocks.json`)
    }
  ]
})
export class ApplicationModule {}
