import { TestBed } from '@angular/core/testing';

import { UserWithModelService } from './user-with-model.service';

describe('UserWithModelService', () => {
  let service: UserWithModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
