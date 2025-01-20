import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // write logic to add bearer token to request
  // const myToken = sessionStorage.getItem('myToken')

  const myToken = 'ABCDEF123456'
  const requestWithToken = req.clone({
    setHeaders: {
      Authorization : 'Bearer ${myToken}'
    }
  });
  return next(requestWithToken);
};