import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UsePipes
} from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { DbContext } from '../core';
import { StockQuote } from '../models';
import { StocksPipe } from './stocks.pipe';

@ApiUseTags('stocks')
@Controller('stocks')
export class StocksController {
  constructor(
    @Inject('StocksContext') private _context: DbContext<StockQuote>
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Yields a list with all known stocks.'
  })
  stocks() {
    return this._context.getAll();
  }

  @Post()
  @UsePipes(new StocksPipe())
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 201, description: 'Create or Update a single stock' })
  upsert(@Body() stockQuote: StockQuote) {
    this._context.upsert(stockQuote);
  }
}
