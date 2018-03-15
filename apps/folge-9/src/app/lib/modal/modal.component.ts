import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aec-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() message: string;
  @Input() color = 'basic';

  @Output() close = new EventEmitter();
}
