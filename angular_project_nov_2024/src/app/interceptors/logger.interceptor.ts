import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor');
  return next(req).pipe(tap(event => {
    console.log('Response Interceptor', event);
    if(event.type === HttpEventType.Response){
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
};
