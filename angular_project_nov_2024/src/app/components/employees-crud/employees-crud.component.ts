import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import * as employees from './employees.json';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-employee-crud',
  imports: [NgxPaginationModule, FormsModule, EmployeeListComponent, FormModalComponent],
  templateUrl: './employees-crud.component.html',
  styleUrl: './employees-crud.component.css'
})
export class EmployeeCRUDComponent {

  employees = (employees as any).default;
  copyOfEmployees: any = this.employees;

  p: any;
  showFlag: boolean = false;
  selectedEmployee: any = '';

  eId: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';

  employeeObject = Object.create(null);

  getCurrentRecord(employee: any) {
    this.showFlag = !this.showFlag;
    this.selectedEmployee = employee;
  }

  getRecordToDelete(employee: any) {
    this.showDeleteAlert(employee);
  }

  insertNewRecord() {
    this.employeeObject.eId = this.eId;
    this.employeeObject.eName = this.eName;
    this.employeeObject.eSalary = this.eSalary;
    this.employeeObject.eGender = this.eGender;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Saved",
      showConfirmButton: false,
      timer: 1500
    });

    if (this.eId == 0 || this.eId == undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    } else {
      this.employees.push(this.employeeObject);
    }

    this.eId  = 0;
    this.eName  = '';
    this.eSalary = 0;
    this.eGender = '';
  }

  insertNewRecord1(employee: any) {

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Saved",
      showConfirmButton: false,
      timer: 1500
    });

    this.employees.push(employee);
  }

  showDeleteAlert(employee: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
      title: `You want to delete this employee ${employee.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes!",
      cancelButtonText: "No!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let deletedEmployee = this.employees.splice(this.employees.indexOf(employee), 1) as any;
        console.log(deletedEmployee);
        swalWithBootstrapButtons.fire({
          title: "Deleted",
          text: `Employee ${deletedEmployee[0].name} deleted.`,
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: `Employee ${employee.name} is safe :)`,
          icon: "error"
        });
      }
    });
  }

}