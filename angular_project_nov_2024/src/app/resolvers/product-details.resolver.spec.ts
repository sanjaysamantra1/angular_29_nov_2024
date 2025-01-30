import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productDetailsResolver } from './product-details.resolver';

describe('productDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
