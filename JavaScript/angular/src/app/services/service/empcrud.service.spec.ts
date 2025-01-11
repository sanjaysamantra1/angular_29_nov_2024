import { TestBed } from '@angular/core/testing';

import { EmpcrudService } from './empcrud.service';

describe('EmpcrudService', () => {
  let service: EmpcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
