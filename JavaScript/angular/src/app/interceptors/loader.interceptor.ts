import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/service/loading.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoadingService);
  console.log("working on showing");

  loaderService.show();

  
  return next(req).pipe(
    finalize(()=>{
      // console.log("hide");
      
      console.log("working on hiding");
      loaderService.hide();
    })
  );
};
