import { TestBed } from '@angular/core/testing';

import { UserWithModalService } from './user-with-modal.service';

describe('UserWithModalService', () => {
  let service: UserWithModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWithModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
