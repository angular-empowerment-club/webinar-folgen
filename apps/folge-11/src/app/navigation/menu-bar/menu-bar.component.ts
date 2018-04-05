import { Component, Input } from '@angular/core';

@Component({
  selector: 'aec-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input() title: string;
}
