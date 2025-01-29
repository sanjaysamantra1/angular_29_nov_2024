import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { haschangesGuard } from './haschanges.guard';

describe('haschangesGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => haschangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
