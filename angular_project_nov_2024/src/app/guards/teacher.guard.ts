import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserinfoService } from '../services/userinfo.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const userInfo = inject(UserinfoService);
  if (userInfo.userRole === 'teacher') {
    return true;
  } else {
    alert('Sorry!! You dont have access to this page')
    return false;
  }
};
