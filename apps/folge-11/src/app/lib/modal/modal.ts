import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { HostElementProvider } from '../host-element/host-element.provider';
import { ModalMessage } from './modal-message';
import { ModalComponent } from './modal.component';

@Injectable()
export class Modal {
  constructor(
    private _resolver: ComponentFactoryResolver,
    private _host: HostElementProvider
  ) {}

  open(message: ModalMessage): Observable<ComponentRef<ModalComponent>> {
    return this._host
      .reference()
      .pipe(map(host => this._createModal(message, host)));
  }

  private _createModal(message: ModalMessage, host: ViewContainerRef): ComponentRef<ModalComponent> {
    const modalFactory = this._resolver.resolveComponentFactory(ModalComponent);

    const modal = host.createComponent(modalFactory);
    modal.instance.message = message;
    modal.instance.close.subscribe(() => modal.destroy());

    return modal;
  }
}
