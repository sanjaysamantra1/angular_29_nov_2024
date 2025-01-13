import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoadingService);
  console.log('show loading...');
  loaderService.show();
  return next(req).pipe(
    finalize(() => {
      console.log('Hide loading....');
      loaderService.hide()
    }),
  );
};
