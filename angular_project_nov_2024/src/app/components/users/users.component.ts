import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
    users: any;

    isLoading: boolean = false;

    constructor(private httpClient : HttpClient){
    }

    ngOnInit(){
      this.isLoading = true;
      const users_url = 'https://jsonplaceholder.typicode.com/users';
      this.httpClient.get(users_url).subscribe(response => {
        this.isLoading = false;
        console.log(response);
        this.users = response;
      })
    }
}
