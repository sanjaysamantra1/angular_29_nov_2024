import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees = [
    {
        "eId": 101,
        "name": "sanjay",
        "sal": 5000,
        "gender": "male"
    },
    {
        "eId": 104,
        "name": "geeta",
        "sal": 8000,
        "gender": "female"
    },
    {
        "eId": 103,
        "name": "sameer",
        "sal": 7000,
        "gender": "male"
    },
    {
        "eId": 102,
        "name": "sita",
        "sal": 9000,
        "gender": "female"
     }]

  maleEmployees: any;
  femaleEmployees: any;

  constructor() { }

  getMaleEmployees(){
    this.maleEmployees = this.employees.filter((e: any) => {
      return e.gender === "male";
    })
    return this.maleEmployees;
  }

  getFemaleEmployees(){
    this.femaleEmployees = this.employees.filter((e: any) => {
      return e.gender === "female";
    })
    return this.femaleEmployees;
  }

  getAllEmployees(){
    return this.employees;
  }

}
