import { Injectable, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

Injectable();
export class HostElementProvider {
  private _hostElement = new ReplaySubject<ViewContainerRef>();

  provide(hostElement: ViewContainerRef): void {
    this._hostElement.next(hostElement);
  }

  reference(): Observable<ViewContainerRef> {
    return this._hostElement.asObservable();
  }
}
