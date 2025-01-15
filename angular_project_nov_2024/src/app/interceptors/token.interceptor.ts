import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // const myToken = sessionStorage.getItem('myToken'); // In general tokens get stored in Session Storage
  const myToken = 'ABCDEF123456'
  const requestWithToken = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`
    }
  });
  return next(requestWithToken);
  // return next(req);
};
