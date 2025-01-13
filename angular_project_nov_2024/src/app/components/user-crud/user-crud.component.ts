import { Component } from '@angular/core';
import { UserCrudService } from '../../services/user-crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  imports: [ CommonModule, FormsModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css'
})
export class UserCrudComponent {

  users: any;
  flag: boolean = false;
  user: any;
  id:any;
  name: any;
  sal:any;
  gender:any;
  constructor(private userCrudObj: UserCrudService){
  }

  getAllUser(){
    this.userCrudObj.getAllUsers().subscribe((responce)=>{
      this.users = responce;
    });
    this.flag = true;
    //console.log(this.users)
  }

  getOneUser(userId: any){
    this.userCrudObj.getOneUser(userId).subscribe((responce)=>{
      this.users = responce;
    });
  }

  addNewUser(form: any){
    console.log(form);
    this.userCrudObj.addNewUser(form);  
    //this.getAllUser();
  }
  deleteUser(userId: any){
    this.userCrudObj.deleteUser(userId);
    this.getAllUser();
  }
  UpdateExistingUser(form: any, id: any){
    this.userCrudObj.updateUser(form, id);
    this.getAllUser();
  }


  updateUser(user: any){
    this.id = user.id;
    this.name=user.name;
    this.sal = user.sal;
    this.gender = user.gender;
  }

}
