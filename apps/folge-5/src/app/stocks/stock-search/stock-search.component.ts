import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aec-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent {
  @Output() search = new EventEmitter<string>();

  emitSymbolQuery(symbolQuery: string) {
    this.search.emit(symbolQuery);
  }
}
