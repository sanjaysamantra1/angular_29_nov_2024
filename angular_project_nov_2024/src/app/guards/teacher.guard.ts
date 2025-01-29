import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserinfoService } from '../services/userinfo.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userinfo = inject(UserinfoService);

  if (userinfo.userRole === 'teacher') {
    return true;
  } else {
    alert("Sorry, you dont have access to this page")
    return false;
  }

};
