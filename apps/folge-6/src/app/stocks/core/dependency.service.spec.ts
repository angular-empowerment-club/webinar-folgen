import { TestBed, inject } from '@angular/core/testing';

import { DependencyService } from './dependency.service';

describe('DependencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependencyService]
    });
  });

  it(
    'should be created',
    inject([DependencyService], (service: DependencyService) => {
      expect(service).toBeTruthy();
    })
  );
});
