import { Component, EventEmitter, Input, Output } from '@angular/core';

import { StockQuote } from '../models';
import { detailsVisibility } from './stock-card.animations';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  animations: [detailsVisibility]
})
export class StockCardComponent {
  @Output() remove = new EventEmitter<StockQuote>();
  @Input() stockQuote: StockQuote;

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  emitRemove() {
    this.remove.emit(this.stockQuote);
  }
}
