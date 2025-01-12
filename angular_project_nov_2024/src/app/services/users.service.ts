import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient){}

  private inputURL = 'http://localhost:3000/users';  // json server url

  fetchAllUsers() {
    return this.httpClient.get(this.inputURL);
  }

  addUser(user: any){
    return this.httpClient.post(this.inputURL, user);
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(`${this.inputURL}/${userId}`);
  }

  updateUser(userId: number, user: any) {
    return this.httpClient.put(`${this.inputURL}/${userId}`, user);
  }
}