import { CanDeactivateFn } from '@angular/router';

export const haschangesGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  if (component?.hasChanges) {
    alert('Please save your changes before you leave this route');
    return false;
  } else {
    return true
  }
};
