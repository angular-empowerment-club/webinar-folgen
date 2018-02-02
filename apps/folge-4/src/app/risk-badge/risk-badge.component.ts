import { Component, Input } from '@angular/core';
import { StockQuoteRisk } from '../models';

@Component({
  selector: 'aec-risk-badge',
  templateUrl: './risk-badge.component.html',
  styleUrls: ['./risk-badge.component.css']
})
export class RiskBadgeComponent {
  risks = StockQuoteRisk;

  @Input() current: StockQuoteRisk;
}
