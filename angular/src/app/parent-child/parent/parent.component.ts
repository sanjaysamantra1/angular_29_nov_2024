import { Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child2Component } from "../child2/child2.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent',
  imports: [Child1Component, Child2Component, FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {


  employees = [
    { id: 1, name: 'Kitti', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Siva', position: 'Designer', department: 'UI/UX' },
    { id: 3, name: 'Gopi', position: 'Developer', department: 'HR' },
  ];

  selectedEmployee: any = null;
  isModalOpen = false;

  addEmployee(newEmployee: any) {
    newEmployee.id = this.employees.length + 1;
    this.employees = [...this.employees, newEmployee];
    Swal.fire('Employee Added Successfully!', '', 'success');
  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter((employee) => employee.id !== id);
        Swal.fire('Deleted!', 'Employee has been removed.', 'success');
      }
    });
  }

  viewEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}


