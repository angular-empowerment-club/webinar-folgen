import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { catchError, tap, mergeMap } from 'rxjs/operators';

import { Modal } from '../../lib/modal/modal';

@Injectable()
export class HandleErrorsInterceptor implements HttpInterceptor {
  constructor(private _modal: Modal) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err =>
        this._modal
          .open({ title: 'ERROR caught by Interceptor', message: err.message })
          .pipe(mergeMap(() => _throw(err)))
      )
    );
  }
}
