import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient){}

  private baseUrl = 'http://localhost:3000/users';

  getUsers() {
    return this.httpClient.get(this.baseUrl);
  }

  addUser(user: any){
    return this.httpClient.post(this.baseUrl, user);
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${userId}`);
  }

  updateUser(userId: number, user: any) {
    return this.httpClient.put(`${this.baseUrl}/${userId}`, user);
  }
}
