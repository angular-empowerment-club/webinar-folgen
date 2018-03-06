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
import { ApiResponse, ApiUseTags, ApiImplicitBody, ApiOperation } from '@nestjs/swagger';

import { DbContext } from '../core';
import { StockQuote } from '../models';
import { StocksPipe } from './stocks.pipe';

@ApiUseTags('stocks')
@Controller('stocks')
export class StocksController {
  constructor(
    @Inject('StocksContext') private _context: DbContext<StockQuote>
  ) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Yields a list with all known stocks.'
  })
  stocks() {
    return this._context.getAll();
  }

  @Post()
  @ApiImplicitBody({ name: "stockQuote", required: true, type: StockQuote })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 201, description: 'Create or Update a single stock' })
  upsert(@Body(new StocksPipe()) stockQuote: StockQuote) {
    this._context.upsert(stockQuote);
  }
}
