import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { LegalRoutingModule } from './legal.routing';

@NgModule({
  imports: [
    CommonModule,
    LegalRoutingModule
  ],
  declarations: [AboutComponent]
})
export class LegalModule { }
