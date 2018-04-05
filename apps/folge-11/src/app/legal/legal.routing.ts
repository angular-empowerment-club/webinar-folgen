import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  { path: '', component: AboutComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule {}
