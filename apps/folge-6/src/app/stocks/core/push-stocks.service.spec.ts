import { TestBed, inject } from '@angular/core/testing';

import { PushStocks } from './push-stocks.service';

describe('PushStocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushStocks]
    });
  });

  it(
    'should be created',
    inject([PushStocks], (service: PushStocks) => {
      expect(service).toBeTruthy();
    })
  );
});
