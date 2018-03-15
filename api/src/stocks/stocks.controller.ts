import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UsePipes,
  Put,
  Param,
  HttpException,
  Res
} from '@nestjs/common';
import { ApiResponse, ApiUseTags, ApiImplicitBody, ApiOperation } from '@nestjs/swagger';

import { DbContext } from '../core';
import { StockQuote } from '../models';
import { StocksPipe } from './stocks.pipe';
import { HttpResponse } from '@angular/common/http';
import { Response } from 'express';

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

  @Get(':symbol')
  @ApiResponse({
    status: 200,
    description: 'Gets a single stock quote by it\'s symbol.'
  })
  @ApiResponse({
    status: 204,
    description: 'If no stock quote was found'
  })
  single(@Param('symbol') symbol: string, @Res() res: Response) {
    try {
      return this._context.getSingle(symbol);
    } catch {
      return res.status(HttpStatus.NO_CONTENT).send();
    }
  }

  @Post()
  @UsePipes(new StocksPipe())
  @ApiImplicitBody({ name: "stockQuote", required: true, type: StockQuote })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 201, description: 'Create or Update a single stock' })
  insert(@Body() stockQuote: StockQuote) {
    this._context.upsert(stockQuote);
  }

  @Put()
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiResponse({ status: 202, description: 'Updates data of a stock' })
  update(@Body(new StocksPipe()) stockQuote: StockQuote) {
    throw new Error('WUAAAAH');
    this._context.upsert(stockQuote);
  }
}
