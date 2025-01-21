import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesubjectService {

  constructor() { }

  private employees = [
    { id:1,name: 'Rohit Sharma', gender: 'male', designation: 'Software Developer', salary: 70000 },
    { id:2,name: 'Priya Singh', gender: 'female', designation: 'UI Designer', salary: 60000 },
    { id:3,name: 'Amit Kumar', gender: 'male', designation: 'Project Manager', salary: 120000 },
    { id:4,name: 'Neha Verma', gender: 'female', designation: 'HR Manager', salary: 80000 },
    { id:5,name: 'Rajesh Gupta', gender: 'male', designation: 'Tester', salary: 50000 },
  ];

  private employeesSubject = new BehaviorSubject(this.employees);
  employees$ = this.employeesSubject.asObservable();


  getEmployees(){
    return this.employees$;
  }

  addEmployee(employee: any){
      this.employees.push(employee);
      this.employeesSubject.next(this.employees);
  }

  updateEmployee(index: number, updatedEmployee: any){
    this.employees[index]=updatedEmployee;
    this.employeesSubject.next([...this.employees]);
    console.log(updatedEmployee);
    
  }

  deleteEmployee(index: number){
    this.employees.splice(index,1);
    this.employeesSubject.next(this.employees);
  }

}
