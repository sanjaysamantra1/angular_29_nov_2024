import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  console.log('show loading....');
  loaderService.show();
  return next(req).pipe(
    finalize(() => {
      console.log('hide loading....');
      loaderService.hide();
    }),
  );
};
