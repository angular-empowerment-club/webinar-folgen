import { Component, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ModalComponent } from './lib/modal/modal.component';
import { HostElementProvider } from './lib/host-element/host-element.provider';
import { ModalCleanser } from './lib/modal/modal-cleanser';

@Component({
  selector: 'aec-root',
  templateUrl: './app.component.html',
  styles: ['a { cursor: pointer; display: inline-block; text-align: center; padding: 8px; width: 100%; }']
})
export class AppComponent {
  constructor(
    hostElement: ViewContainerRef,
    changeDetector: ChangeDetectorRef,
    hostElementProvider: HostElementProvider,
    cleanser: ModalCleanser
  ) {
    hostElementProvider.provide(hostElement);
    cleanser.cleanUpRequests().subscribe(() => changeDetector.detectChanges());
  }
}
