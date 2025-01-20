import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { catchError, EMPTY } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const toastService = inject(ToastService);
  return next(req).pipe(catchError((error) => {
    toastService.showError(error.message);
    return EMPTY;
  }));
};
