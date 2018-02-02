import { Component, Input } from '@angular/core';

import { StockQuoteDetails } from '../models';

@Component({
  selector: 'aec-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  @Input() stockQuoteDetails: StockQuoteDetails;
}
