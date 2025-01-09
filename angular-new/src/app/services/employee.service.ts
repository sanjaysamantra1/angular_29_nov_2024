import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  private employees = [
    { id: 1, name: 'John Doe', gender: 'male', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', gender: 'female', position: 'Project Manager' },
    { id: 3, name: 'Mike Johnson', gender: 'male', position: 'Analyst' },
    { id: 4, name: 'Emily Davis', gender: 'female', position: 'Designer' },
  ];

  getEmployees() {
    return this.employees;
  }
}
