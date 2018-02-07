import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { StockQuoteRisk } from '../models';

@Component({
  selector: 'aec-stock-risk-filter',
  templateUrl: './stock-risk-filter.component.html',
  styleUrls: ['./stock-risk-filter.component.css']
})
export class StockRiskFilterComponent implements OnInit {
  risks = StockQuoteRisk;
  riskKeys = Object.keys(this.risks).filter(r => !isNaN(+r));

  /**
   * Represents the initial State of the filter
   * where all known risks are selected.
   */
  activeRisks = [...this.riskKeys];

  @Output() update = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.update.emit(this.activeRisks);
  }

  updateActiveRisks(key: string) {
    this.isRiskActive(key)
      ? (this.activeRisks = this.activeRisks.filter(k => k !== key))
      : (this.activeRisks = [...this.activeRisks, key]);

    this.update.emit(this.activeRisks);
  }

  isRiskActive(key: string) {
    return this.activeRisks.includes(key);
  }
}
