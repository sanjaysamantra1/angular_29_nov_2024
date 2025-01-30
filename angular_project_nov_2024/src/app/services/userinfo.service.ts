import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  userRole: string = 'teacher';

  constructor() { }
}
