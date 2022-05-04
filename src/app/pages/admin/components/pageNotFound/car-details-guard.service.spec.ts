import { TestBed } from '@angular/core/testing';

import { CarDetailsGuardService } from './car-details-guard.service';

describe('CarDetailsGuardService', () => {
  let service: CarDetailsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
