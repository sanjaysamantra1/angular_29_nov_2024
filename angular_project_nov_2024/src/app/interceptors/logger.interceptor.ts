// import { HttpInterceptorFn } from '@angular/common/http';
// import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
// import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
// import { tap } from 'rxjs';

// export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log('Request Interceptor', req);
//   return next(req).pipe(tap(event => {
//     console.log('Response Interceptor', event);
//     if (event.type === HttpEventType.Response) {
//       console.log(req.url, 'returned a response with status', event.status);
//     }
//   }));
// };

// export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log("Logger Interceptor .....")
//   // console.log("HTTP Request:", req) // logs all the http request details
//   console.log("HTTP Request Method: ", req.method) // GET
//   console.log("HTTP Request Body: ", req.body)
//   console.log("HTTP Request Headers: ", req.headers)
//   console.log("HTTP Request Parameters: ", req.params)
//   console.log("HTTP Request URL: ", req.url)
  
//   return next(req).pipe(tap(event => {
//     console.log('Response Interceptor', event);
//     if (event.type === HttpEventType.Response) {
//       console.log(req.url, 'returned a response with status', event.status);
//     }
//   }));
// };


import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor', req);
  return next(req).pipe(tap(event => {
    console.log('Response Interceptor', event);
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
};