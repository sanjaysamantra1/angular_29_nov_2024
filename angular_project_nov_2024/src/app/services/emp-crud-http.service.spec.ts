import { TestBed } from '@angular/core/testing';

import { EmpCrudHttpService } from './emp-crud-http.service';

describe('EmpCrudHttpService', () => {
  let service: EmpCrudHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCrudHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
