import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  base_url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  fetchAllEmployees() {
    return this.http.get(this.base_url);
  }
  addEmployee(employeeObj: Employee) {
    return this.http.post(this.base_url, employeeObj);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${this.base_url}/${id}`);
  }
}
