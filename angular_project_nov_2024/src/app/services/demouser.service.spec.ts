import { TestBed } from '@angular/core/testing';

import { DemouserService } from './demouser.service';

describe('DemouserService', () => {
  let service: DemouserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemouserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
