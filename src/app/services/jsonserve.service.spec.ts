import { TestBed } from '@angular/core/testing';

import { JsonserveService } from './jsonserve.service';

describe('JsonserveService', () => {
  let service: JsonserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
