import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as employees from './employees.json';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) { }

  employees = (employees as any).default;
  allTheEmployees: any;
  onlyMaleEmployees: any;
  onlyFemaleEmployees: any
  users: any;

  getUsers() {
    const getUsersUrl = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(getUsersUrl).subscribe(response => {
      console.log(response);
      this.users = response;
    })
    console.log("Service", this.users);
    return this.users;
  }

  maleEmployees() {
    console.log("maleEmployees");
    this.onlyMaleEmployees = this.employees.filter((e: any) =>{
      return e.gender === 'male';
    });
    console.log(this.onlyMaleEmployees);
    return this.onlyMaleEmployees;
  }

  femaleEmployees() {
    console.log("femaleEmployees");
    // this.employees= (employees as any).default;
    this.onlyFemaleEmployees = this.employees.filter((e: any) => {
      return e.gender == 'female';
    });
    console.log(this.onlyFemaleEmployees);
    return this.onlyFemaleEmployees;
  }

  allEmployees() {
    return this.employees;
  }


}
