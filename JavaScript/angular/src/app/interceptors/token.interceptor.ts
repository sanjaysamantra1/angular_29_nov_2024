import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  
  const myToken = 'RohithRudrapati';
  const reqWithToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  })
  return next(reqWithToken);
};
