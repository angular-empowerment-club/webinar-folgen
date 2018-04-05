import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ALPHAVANTAGE_API_KEY } from '../app-options';

@Injectable()
export class AttachAlphavantageApiKey implements HttpInterceptor {
  constructor(@Inject(ALPHAVANTAGE_API_KEY) private apiKey: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      setParams: { apikey: this.apiKey }
    });

    return next.handle(clone);
  }
}
