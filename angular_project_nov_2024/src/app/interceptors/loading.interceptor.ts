import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoadingService);
  loaderService.show();
  // console.log("Request", req);
  
  return next(req).pipe(
     finalize(() => loaderService.hide()),
  );
}