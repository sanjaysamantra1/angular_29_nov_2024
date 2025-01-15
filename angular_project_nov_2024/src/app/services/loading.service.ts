import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  show() {
    return true;
  }

  hide() {
    return false;
  }
}
