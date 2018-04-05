import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { StockDetailsComponent } from './stocks/stock-details/stock-details.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Route[] = [
  { path: '', component: StocksComponent, pathMatch: 'full' },
  { path: 'stock/:symbol', component: StockDetailsComponent },
  { path: 'legal', loadChildren: './legal/legal.module#LegalModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
