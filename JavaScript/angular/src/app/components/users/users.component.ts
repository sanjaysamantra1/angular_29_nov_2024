import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users:any;
  view:boolean=false;
  isLoading:boolean=true;

  constructor(private http:HttpClient){
  }

  ngOnInit(){
    const users_url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(users_url).subscribe(response=>{

      console.log(response);
      this.users=response
      this.isLoading=false;
    }
)



    
  }

}
