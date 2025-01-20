import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserWithModalService } from '../../services/user-with-modal.service';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user-with-models',
  imports: [],
  templateUrl: './user-with-models.component.html',
  styleUrl: './user-with-models.component.css'
})
export class UserWithModelsComponent {
  // users: Iuser[] = []; // using Interface
  users: UserModel[] = [];

  constructor(private userWithModalService: UserWithModalService) {
  }

  ngOnInit() {
    this.userWithModalService.getAllUsers().subscribe((response: UserModel[]) => {
      this.users = response;
      console.log(this.users);
    })
  }

}
