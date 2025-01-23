import { TestBed } from '@angular/core/testing';

import { EmployeecrudService } from './employeecrud.service';

describe('EmployeecrudService', () => {
  let service: EmployeecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
