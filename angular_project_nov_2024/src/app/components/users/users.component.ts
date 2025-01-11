import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(this.users);
      // this.users = [ {} , {} ]   this.users = [ User1 , User2]
    })
  }
}
