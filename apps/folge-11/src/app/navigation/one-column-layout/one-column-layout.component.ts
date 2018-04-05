import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'aec-one-column-layout',
  templateUrl: './one-column-layout.component.html',
  styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent {
  @ViewChild(MatSidenav) private _sidenav: MatSidenav;

  toggleSidenav() {
    this._sidenav.toggle();
  }
}
