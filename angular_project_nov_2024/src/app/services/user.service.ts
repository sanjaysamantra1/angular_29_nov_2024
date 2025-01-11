import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any;
  userObject = Object.create(null);
  users_url = "http://localhost:3000/employees";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.users_url);    
  }

  getUsersFromEndpoint() {
    this.httpClient.get(this.users_url).subscribe(response => {
      this.users = response;
    })
    
  }
  getUsers(){
    this.getUsersFromEndpoint();
    return this.users;
  }

  saveUser(userDetails: any) {
    this.httpClient.post(this.users_url, userDetails).subscribe(response => {
      console.log(response);
    })
  }

  updateUser(userId: number, updateObject: any) {
    let update_url = this.users_url + "/" + userId;
    this.httpClient.put(update_url, updateObject).subscribe(response => {
      console.log(response);
    })
  }

  deleteUser(userId: number) {
    let delete_url = this.users_url + "/" + userId;
    this.httpClient.delete(delete_url).subscribe(response => {
      console.log(response);
    })
  }
}
