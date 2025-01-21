import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(retry(2)); /// if my req fails try 2 more times and after 2 times also its not coming then give failed respsonse
};

