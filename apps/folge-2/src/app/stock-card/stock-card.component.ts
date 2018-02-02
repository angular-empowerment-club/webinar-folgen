import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
  isDetailsViewHidden = true;

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  @Input() stockQuote;

  toggleDetailsViewVisibility() {
    this.isDetailsViewHidden = !this.isDetailsViewHidden;
  }
}
