import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainComponent } from './main/main.component';
import { OneColumnLayoutComponent } from './one-column-layout/one-column-layout.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [MenuBarComponent, MainComponent, OneColumnLayoutComponent],
  exports: [MenuBarComponent, MainComponent, OneColumnLayoutComponent]
})
export class NavigationModule { }
