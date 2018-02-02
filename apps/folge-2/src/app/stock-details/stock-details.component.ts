import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aec-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent {
  @Input() stockQuoteDetails;
}
