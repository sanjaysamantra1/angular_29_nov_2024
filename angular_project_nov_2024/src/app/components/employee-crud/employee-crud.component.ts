import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import * as data from './employees.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Child1EmployeeCrudComponent } from "../child1-employee-crud/child1-employee-crud.component";
import { Child2EmployeeDetailsComponent } from "../child2-employee-details/child2-employee-details.component";

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule, CommonModule, Child1EmployeeCrudComponent, Child2EmployeeDetailsComponent],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent {
  employeeList: any[] = (data as any).default;
  formVisible: boolean = false;

  EmployeeDetails:any;
  getEvent(newEmployee:any){
    this.employeeList.push(newEmployee);
  }

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
        console.log("Deleted from parent");
        console.log(this.employeeList);
        
        
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
