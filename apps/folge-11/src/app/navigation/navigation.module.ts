import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [MenuBarComponent],
  exports: [MenuBarComponent]
})
export class NavigationModule { }
