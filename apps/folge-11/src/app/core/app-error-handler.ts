import { ErrorHandler } from '@angular/core';

import { Modal } from '../lib/modal/modal';
import { ModalCleanser } from '../lib/modal/modal-cleanser';

export class AppErrorHandler implements ErrorHandler {
  constructor(private _modal: Modal, private _cleanser: ModalCleanser) {}

  handleError(error) {
    console.error(error);

    this._modal
      .open({
        title: 'Global Error',
        message: 'Please contact the support',
        color: 'warn'
      })
      .subscribe(modal => {
        modal.changeDetectorRef.detectChanges();
        modal.instance.close.subscribe(() => this._cleanser.run())
      });
  }
}
