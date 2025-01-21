import { TestBed } from '@angular/core/testing';

import { EmpSubjectService } from './emp-subject.service';

describe('EmpSubjectService', () => {
  let service: EmpSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
