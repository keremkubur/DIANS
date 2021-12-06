import {TestBed} from '@angular/core/testing';

import {BusAPIService} from './bus-api.service';

describe('BusAPIService', () => {
  let service: BusAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
