import { Component, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { ModalComponent } from './lib/modal/modal.component';

@Component({
  selector: 'aec-root',
  templateUrl: './app.component.html',
  styles: ['a { cursor: pointer; display: inline-block; text-align: center; padding: 8px; width: 100%; }']
})
export class AppComponent {
  private _modal: ComponentRef<ModalComponent>;

  constructor(
    private _root: ViewContainerRef,
    private _resolver: ComponentFactoryResolver
  ) {}

  open() {
    const modalFactory = this._resolver.resolveComponentFactory(ModalComponent);
    this._modal = this._root.createComponent(modalFactory);

    this._modal.instance.title = 'Hilfe';
    this._modal.instance.message = 'API liefert keine Daten mehr';
    this._modal.instance.color = 'accent';

    this._modal.instance.close.subscribe(() => this._modal.destroy(), () => {}, () => console.log('COMPLETED'));
  }
}
