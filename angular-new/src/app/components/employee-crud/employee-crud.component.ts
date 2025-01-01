import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeCrudChild1Component } from '../employee-crud-child-1/employee-crud-child-1.component';
import { EmployeeCrudChild2Component } from '../employee-crud-child-2/employee-crud-child-2.component';
import * as employees from './employee.json'

@Component({
  selector: 'app-employee-crud',
  imports: [
    EmployeeCrudChild1Component,
    EmployeeCrudChild2Component
  ],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent {
  employees : any[] = (employees as any).default;
  showForm: boolean = false;

  addEmployee(employee: any): void {
    this.employees.push(employee);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Employee added successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  viewEmployee(employee: any): void {
    Swal.fire({
      title: '<strong>Employee Details</strong>',
      html: `
        <p><strong>Id:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Designation:</strong> ${employee.designation}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  }

  deleteEmployee(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter((emp) => emp.id !== id);
        Swal.fire('Deleted!', 'The employee has been deleted.', 'success');
      }
    });
  }
}
