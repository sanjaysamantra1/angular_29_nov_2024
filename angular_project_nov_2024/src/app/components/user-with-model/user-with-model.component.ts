import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserWithModelService } from '../../services/user-with-model.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user-with-model',
  imports: [],
  templateUrl: './user-with-model.component.html',
  styleUrl: './user-with-model.component.css'
})

export class UserWithModelComponent {
  // users: Iuser[] = [];
     users: UserModel[] = [];
  
      isLoading: boolean = false;
  
      constructor(private userService : UserWithModelService){
      }
  
      // ngOnInit(){
      //   this.userService.getAllUsers().subscribe((response : Iuser[]) => {
      //     this.users = response;
      //     // this.users = [{}, {}] is not equal to this.users = userObj1, userObj2]
      //   })
      // }

      ngOnInit(){
        this.userService.getAllUsers().subscribe((response : UserModel[]) => {
          this.users = response;
          // this.users = [{}, {}] is not equal to this.users = userObj1, userObj2]
        })
      }
}
