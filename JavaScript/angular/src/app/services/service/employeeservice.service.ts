import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }

  employees=[
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  allEmp:any;
  maleEmp:any;
  femaleEmp:any;

  allEmployees(){
    this.allEmp=this.employees;
    return this.allEmp;
  }

  maleEmployees(){
    this.maleEmp=this.employees.filter(k=>k.gender==='male');
    return this.maleEmp;
  }

  femaleEmployees(){
    this.femaleEmp=this.employees.filter(k=>k.gender==='female');
    return this.femaleEmp;
  }
}
