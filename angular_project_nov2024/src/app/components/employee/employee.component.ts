import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
emp:any;
employees: any[] = [];
users:any;
  constructor(public employeeService:EmployeeService,private httpClient:HttpClient){}

  // ngOnInit(){
  //   const users_url='https://jsonplaceholder.typicode.com/users';
  //   this.httpClient.get(users_url).subscribe(response=>{
  //     this.users=response;
  //   })
  //   return this.users;
  // }
  // ngDoCheck(){

  // }
}
