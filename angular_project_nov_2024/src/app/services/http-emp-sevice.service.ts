import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpEmpSeviceService {

  constructor() { }
  fetchDataAngular(){
      const user_url='https://jsonplaceholder.typicode.com/users';
      let user_obs=this.httpClient.get(user_url);
      this.httpClient.get(user_url).subscribe(
      )
      )
    }
}
