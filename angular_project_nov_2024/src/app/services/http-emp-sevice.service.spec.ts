import { TestBed } from '@angular/core/testing';

import { HttpEmpSeviceService } from './http-emp-sevice.service';

describe('HttpEmpSeviceService', () => {
  let service: HttpEmpSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmpSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
