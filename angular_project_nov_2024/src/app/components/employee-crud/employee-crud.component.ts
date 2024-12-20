import { Component } from '@angular/core';
import * as employees from './employees.json';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  imports: [NgxPaginationModule, FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
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
    console.log("Current Record ", employee.eId);
    this.showFlag = !this.showFlag;
    this.selectedEmployee = employee;
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.showDeleteAlert(employee);
  }

  insertNewRecord() {
    console.log(this.eId + ' ' + this.eName + ' ' + this.eGender + ' ' + this.eSalary);
    this.employeeObject.eId = this.eId;
    this.employeeObject.name = this.eName;
    this.employeeObject.sal = this.eSalary;
    this.employeeObject.gender = this.eGender;
    console.log(this.employeeObject);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

    this.employees.push(this.employeeObject);
    this.employeeObject = null;
    this.eId = 0;
    this.eName = '';
    this.eSalary = 0;
    this.eGender = '';
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
      title: `Are you sure you want to delete employee ${employee.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let deletedEmployee = this.employees.splice(this.employees.indexOf(employee), 1) as any;
        console.log(deletedEmployee);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: `Employee ${deletedEmployee[0].name} has been deleted.`,
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: `Your Employee ${employee.name} is safe :)`,
          icon: "error"
        });
      }
    });
  }

}
