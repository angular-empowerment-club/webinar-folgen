import { Component, EventEmitter, Input, Output } from '@angular/core';

import { StockQuoteRisk } from '../models';

@Component({
  selector: 'aec-stock-risk-switcher',
  templateUrl: './stock-risk-switcher.component.html',
  styleUrls: ['./stock-risk-switcher.component.css']
})
export class StockRiskSwitcherComponent {
  uniqueName = 'risk_' + Math.floor(Math.random() * 20);
  risks = StockQuoteRisk;

  @Output() choose = new EventEmitter<StockQuoteRisk>();
  @Input() current: StockQuoteRisk;
}
