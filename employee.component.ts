import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeCRUDComponent {
  employees = [
    { name: 'x', designation: 'Software Engineer' },
    { name: 'y', designation: 'Project Manager' },
    { name: 'z', designation: 'QA Analyst' },
  ];

   // Variables to control modal visibility and selected employee
   showModal: boolean = false;
   selectedEmployee: any = null;
 
   // Method to view employee details
   viewDetails(employee: any): void {
     this.selectedEmployee = employee;
     this.showModal = true;
   }
 
   // Method to close the modal
   closeModal(): void {
     this.showModal = false;
   }
 
   // Method to stop click propagation inside the modal
   stopPropagation(event: MouseEvent): void {
     event.stopPropagation();
   }

  confirmDelete(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEmployee(index);
      }
    });
  }

  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
    Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
  }

  openAddEmployeeModal(): void {
    Swal.fire({
      title: 'Add Employee',
      html: `
        <input id="name" class="swal2-input" placeholder="Name">
        <input id="designation" class="swal2-input" placeholder="Designation">
      `,
      showCancelButton: true,
      confirmButtonText: 'Add',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const designation = (document.getElementById('designation') as HTMLInputElement).value;
        if (!name || !designation) {
          Swal.showValidationMessage('Both fields are required!');
        }
        return { name, designation };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.addEmployee(result.value.name, result.value.designation);
      }
    });
  }

  addEmployee(name: string, designation: string): void {
    this.employees.push({ name, designation });
    Swal.fire('Added Successfully', '', 'success');
  }

}