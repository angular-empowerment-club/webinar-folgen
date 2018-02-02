import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tsla = {
    symbol: 'tsla',
    company: 'Tesla Inc',
    last: 285,
    details: {
      lastUpdateOn: new Date(2018, 0, 17, 21, 29),
      nextEarnings: new Date(2018, 1, 28)
    }
  };
}
