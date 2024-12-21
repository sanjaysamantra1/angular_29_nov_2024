import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import * as data from './employees.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent {
  employeeList: any[] = (data as any).default;
  formVisible: boolean = false;

  // Toggle form visibility
  toggleEmployeeForm(): void {
    this.formVisible = !this.formVisible;
  }

  // View employee details
  viewEmployeeDetails(employee: any): void {
    Swal.fire({
      title: '<strong>Employee Information</strong>',
      html: `
        <p><b>ID:</b> ${employee.empId}</p>
        <p><b>Full Name:</b> ${employee.fullName}</p>
        <p><b>Department:</b> ${employee.dept}</p>
        <p><b>Role:</b> ${employee.role}</p>
        <p><b>Email:</b> ${employee.emailAddress}</p>
        <p><b>Monthly Salary:</b> ${employee.monthlySalary}</p>
      `,
      icon: 'info',
      showCloseButton: true,
    });
  }

  // Remove employee
  removeEmployee(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeList = this.employeeList.filter((emp) => emp.empId !== id);
        Swal.fire('Deleted!', 'Employee record has been removed.', 'success');
      }
    });
  }

  // Handle form submission
  handleFormSubmit(form: any): void {
    if (form.valid) {
      this.employeeList.push(form.value);
      this.formVisible = false;
      form.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Employee added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
