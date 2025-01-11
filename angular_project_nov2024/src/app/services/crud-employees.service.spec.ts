import { TestBed } from '@angular/core/testing';

import { CrudEmployeesService } from './crud-employees.service';

describe('CrudEmployeesService', () => {
  let service: CrudEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
