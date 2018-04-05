import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aec-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input() title: string;
  @Output() menuClick = new EventEmitter<void>();

  emitMenuClick() {
    this.menuClick.emit();
  }
}
