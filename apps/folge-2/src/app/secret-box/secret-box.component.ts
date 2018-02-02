import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secret-box',
  templateUrl: './secret-box.component.html',
  styleUrls: ['./secret-box.component.css']
})
export class SecretBoxComponent {
  @Input() isHidingSecret = true;
  @Input() secret: string;

  @Output() hide = new EventEmitter();

  toggleSecretVisibility() {
    this.isHidingSecret = !this.isHidingSecret;

    if (this.isHidingSecret === true) {
      this.hide.emit();
    }
  }
}
