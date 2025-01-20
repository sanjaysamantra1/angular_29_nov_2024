import { TestBed } from '@angular/core/testing';

import { InternServiceService } from './intern-service.service';

describe('InternServiceService', () => {
  let service: InternServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
