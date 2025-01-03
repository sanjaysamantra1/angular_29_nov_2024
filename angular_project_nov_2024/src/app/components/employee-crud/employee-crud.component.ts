import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { Empchild1Component } from '../empchild1/empchild1.component';
import { Empchild2Component } from "../empchild2/empchild2.component";
import { FilterempPipe } from '../../pipes/filteremp.pipe';

@Component({
  selector: 'app-employee-crud',
  imports: [NgxPaginationModule, CommonModule, FormsModule, SalutationPipe, Empchild1Component, Empchild2Component, FilterempPipe],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak1', sal: 8000, gender: 'male' },
    { eId: 106, name: 'sanjay1', sal: 5000, gender: 'male' },
    { eId: 107, name: 'geeta1', sal: 8000, gender: 'female' },
    { eId: 108, name: 'sameer1', sal: 7000, gender: 'male' },
    { eId: 109, name: 'sita1', sal: 9000, gender: 'female' },
    { eId: 110, name: 'deepak1', sal: 8000, gender: 'male' },
    { eId: 111, name: 'sanjay2', sal: 5000, gender: 'male' },
    { eId: 112, name: 'geeta2', sal: 8000, gender: 'female' },
    { eId: 113, name: 'sameer2', sal: 7000, gender: 'male' },
    { eId: 114, name: 'sita2', sal: 9000, gender: 'female' },
    { eId: 115, name: 'deepak2', sal: 8000, gender: 'male' }


  ];
  p: any;
  deleteEmployee(eId: number): void {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {

        const index = this.employees.findIndex(employee => employee.eId === eId);
        if (index !== -1) {
          this.employees.splice(index, 1);
        }

        Swal.fire({
          title: 'Deleted!',
          text: 'The employee has been deleted.',
          icon: 'success',
          timer: 2000,
        });
      }
    });
  }

  view(employee: any): void {
    Swal.fire({
      title: `<strong>Employee Details</strong>`,
      html: `
        <p><strong>Id:</strong> ${employee.eId}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Department:</strong> ${employee.sal}</p>
        <p><strong>Designation:</strong> ${employee.gender}</p>
      `,
      // icon: 'info',
      showCloseButton: true,
      showConfirmButton: false,
    });

  }
  inputID: number = 0;
  inputName: string = "";
  inputSalary: number = 0;
  inputGender: string = "";

  addemployee() {
    this.employees.push(
      {
        eId: this.inputID as any,
        name: this.inputName as any,
        sal: this.inputSalary as any,
        gender: this.inputGender as any,
      }
    )
    this.inputID = 0;
    this.inputName = "";
    this.inputSalary = 0;
    this.inputGender = "";

  }


  msg: string = "";

}


