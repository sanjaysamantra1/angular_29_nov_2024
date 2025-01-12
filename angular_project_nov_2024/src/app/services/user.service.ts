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
    return this.httpClient.post(this.users_url, userDetails);
  }

  updateUser(userId: number, updateObject: any) {
    let update_url = this.users_url + "/" + userId;
    return this.httpClient.put(update_url, updateObject);
  }

  deleteUser(userId: number) {
    let delete_url = this.users_url + "/" + userId;
    return this.httpClient.delete(delete_url);
  }
}
