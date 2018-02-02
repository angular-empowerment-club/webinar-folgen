import { Component, Input } from '@angular/core';
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

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  @Input() stockQuote: StockQuote;

  toggleDetailsViewVisibility() {
    this.detailsVisibility = this.detailsVisibility.next();

    /**
     * @before
     * if (this.visibilityState === 'hidden') {
     *   this.visibilityState = 'shown';
     * } else {
     *   this.visibilityState = 'hidden';
     * }
     */
  }
}
