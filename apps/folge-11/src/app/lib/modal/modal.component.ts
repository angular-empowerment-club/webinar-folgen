import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalMessage } from './modal-message';

@Component({
  selector: 'aec-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() message: ModalMessage;

  @Output() close = new EventEmitter();
}
