import { TestBed } from '@angular/core/testing';

import { EmployeeservicesubjectService } from './employeeservicesubject.service';

describe('EmployeeservicesubjectService', () => {
  let service: EmployeeservicesubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeservicesubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
