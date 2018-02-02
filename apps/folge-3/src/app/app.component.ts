import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

import { StockQuote } from './models';

@Component({
  selector: 'aec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate(1000)]),
      transition('* => void', [animate(100, style({ opacity: 1, transform: 'translateX(100%)' }))])
    ])
  ]
})
export class AppComponent {
  tsla: StockQuote = {
    symbol: 'tsla',
    company: 'Tesla Inc',
    last: 285,
    details: {
      lastUpdateOn: new Date(2018, 0, 17, 21, 29),
      nextEarnings: new Date(2018, 1, 28)
    }
  };
}
