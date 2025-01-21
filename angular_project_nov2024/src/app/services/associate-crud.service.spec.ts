import { TestBed } from '@angular/core/testing';

import { AssociateCrudService } from './associate-crud.service';

describe('AssociateCrudService', () => {
  let service: AssociateCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociateCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
