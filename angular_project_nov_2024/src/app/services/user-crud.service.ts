import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  users: any;
  url : string = "http://localhost:3000/users/";
  constructor(private httpObj: HttpClient) {
  }

  getAllUsers(){
    this.httpObj.get(this.url).subscribe((Response)=>{
      //console.log(Response);
      this.users = Response;
    })
  }

  getOneUser(userId: number){
    
    this.httpObj.get(this.url+userId).subscribe((Response)=>{
      //console.log(Response);
      this.users = Response;
    })
  }
  addNewUser(body: any){
    this.httpObj.post(this.url, body).subscribe();
  }
  deleteUser(userId: any){
    this.httpObj.delete(this.url+userId).subscribe();
  }
  updateUser(user: any, id: any){
    this.httpObj.put(this.url+id, user).subscribe();
  }

  getAllUserForComponent(){
    this.getAllUsers();
    return this.users;
  }
  
  getOneUserForComponent(userId: number){
    this.getOneUser(userId);
    return this.users;
  }
  
  
  



}
