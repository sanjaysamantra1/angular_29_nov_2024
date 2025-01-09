import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: any;
  
  constructor() {}
  getEmployees(){
    return this.employee = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
      { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
    ];
  }
  getFilteredEmp(s: String){
    this.employee= this.getEmployees();
    this.employee= this.employee.filter((emp: any) => {
      return emp.gender === s;
    });
    return this.employee;
  }
}
