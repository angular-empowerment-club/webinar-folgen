import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ElementChangingVisibility, HiddenElement } from '@utilities/animations';

import { StockQuote } from '../models';
import { detailsVisibility } from './stock-card.animations';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  animations: [detailsVisibility]
})
export class StockCardComponent {
  detailsVisibility: ElementChangingVisibility = new HiddenElement();

  @Output() remove = new EventEmitter<StockQuote>();
  @Input() stockQuote: StockQuote;

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  toggleDetailsViewVisibility() {
    this.detailsVisibility = this.detailsVisibility.next();
  }

  emitRemove() {
    this.remove.emit(this.stockQuote);
  }
}
