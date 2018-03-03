import { Pipe, PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { StockQuote } from '../models';

@Pipe()
export class StocksPipe implements PipeTransform<any> {
  transform(value: {[key in keyof StockQuote]}, metadata: ArgumentMetadata): StockQuote {
    return Object.assign(new StockQuote(), value);
  }
}