import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { Stocks } from '../lib/stocks.service';
import { StockQuote } from '../models';

@Component({
  selector: 'aec-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock$ : Observable<StockQuote>;

  constructor(private _route: ActivatedRoute, private _stocks: Stocks) {}

  ngOnInit(): void {
    this.stock$ = this._route.paramMap.pipe(
      switchMap(paramMap => this._stocks.getSingle(paramMap.get('symbol')))
    );
  }
}
