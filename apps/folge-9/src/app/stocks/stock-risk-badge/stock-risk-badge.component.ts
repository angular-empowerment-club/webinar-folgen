import { Component, Input } from '@angular/core';
import { StockQuoteRisk } from '../models';

@Component({
  selector: 'aec-risk-badge',
  templateUrl: './stock-risk-badge.component.html',
  styleUrls: ['./stock-risk-badge.component.css']
})
export class RiskBadgeComponent {
  risks = StockQuoteRisk;

  @Input() current: StockQuoteRisk;
}
