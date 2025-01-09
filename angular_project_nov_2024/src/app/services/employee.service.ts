import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as employeeData from './employees.json';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employeeList = (employeeData as any).default; 
  maleEmployeeList: any[] = [];
  femaleEmployeeList: any[] = [];
  allEmployee: any[] = [];

  constructor(private httpClient: HttpClient) {}

  
  fetchallEmployee() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(apiUrl).subscribe((response) => {
      console.log('External Users:', response);
      this.allEmployee = response as any[];
    });
    return this.allEmployee;
  }

  
  // Filters all male employees.
  
  getMaleEmployees(): any[] {
    console.log('Fetching male employees');
    this.maleEmployeeList = this.employeeList.filter(
      (employee: any) => employee.gender === 'male'
    );
    console.log(this.maleEmployeeList);
    return this.maleEmployeeList;
  }

  
  // Filters and all female employees
  getFemaleEmployees(): any[] {
    console.log('Fetching female employees');
    this.femaleEmployeeList = this.employeeList.filter(
      (employee: any) => employee.gender === 'female'
    );
    console.log(this.femaleEmployeeList);
    return this.femaleEmployeeList;
  }

  
  // List of all employees.
  
  getAllEmployees(): any[] {
    console.log('Fetching all employees');
    return this.employeeList;
  }
}
