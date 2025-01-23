import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.component.html',
  styleUrl: './signal-demo2.component.css'
})
export class SignalDemo2Component {

  userId: number = 1;
  users:any;

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(){
    this.fetchUserDetails();
  }

  fetchUserDetails(){
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).subscribe((data)=>{
      console.log(data);
      this.users= data;
    })
  }
}
