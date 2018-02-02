import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { StockQuote } from '../models';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  animations: [
    trigger('detailsVisibility', [
      state(
        'hidden',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      state(
        'shown',
        style({
          opacity: 1,
          display: 'block'
        })
      ),
      transition('hidden => shown', animate('1000ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ])
  ]
})
export class StockCardComponent {
  visibilityState = 'hidden';
  isDetailsViewHidden = true;

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  @Input() stockQuote: StockQuote;

  toggleDetailsViewVisibility() {
    if (this.visibilityState === 'hidden') {
      this.visibilityState = 'shown';
    } else {
      this.visibilityState = 'hidden';
    }
    this.isDetailsViewHidden = !this.isDetailsViewHidden;
  }
}
