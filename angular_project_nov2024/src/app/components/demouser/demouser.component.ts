import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demouser',
  imports: [],
  templateUrl: './demouser.component.html',
  styleUrl: './demouser.component.css'
})
export class DemouserComponent {
constructor(private httpClient:HttpClient){}

ngOnInit(){
  const users_url='https://jsonplaceholder.typicode.com/users';
  this.httpClient.get(users_url).subscribe(response=>{
    console.log(response);
  })
}
}
