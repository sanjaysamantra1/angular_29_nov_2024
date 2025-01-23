import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeecrudService {

  private employees: any[] = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: 70000 },
    { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'Management', salary: 90000 },
    { id: 3, name: 'Bob Johnson', position: 'UI/UX Designer', department: 'Design', salary: 60000 },
  ];

  private employeesSubject = new BehaviorSubject<any[]>(this.employees);

  employees$ = this.employeesSubject.asObservable();

  addEmployee(employee: any): void {
    this.employees.push(employee);
    this.employeesSubject.next([...this.employees]);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter((e) => e.id !== id);
    this.employeesSubject.next([...this.employees]);
  }

  getEmployeeById(id: number): any | undefined {
    return this.employees.find((e) => e.id === id);
  }

  updateEmployee(updatedEmployee: any): void {
    console.log("--updatedEmployee-",updatedEmployee);
    const index = this.employees.findIndex((e) => e.id === updatedEmployee.id);
    console.log("index", index);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      this.employeesSubject.next([...this.employees]); 
    }
  }
}
