import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalCleanser {
  private _cleanUp = new Subject<void>();

  run(): void {
    this._cleanUp.next();
  }

  cleanUpRequests(): Observable<void> {
    return this._cleanUp.asObservable();
  }
}
