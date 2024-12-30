import { Component } from '@angular/core';
import * as employees from './employees.json';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { EmployeeFormModelComponent } from "../employee-form-model/employee-form-model.component";
import { FormModalComponent } from "../form-modal/form-modal.component";

@Component({
  selector: 'app-employee-crud',
  imports: [NgxPaginationModule, FormsModule, EmployeeListComponent, EmployeeFormModelComponent, FormModalComponent],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  employees = (employees as any).default;
  copyOfEmployees: any = this.employees;

  p: any;
  showEmployeeFormModel: boolean = false;

  eId: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';

  employeeObject = Object.create(null);

  toggleModel() {
    console.log("Before Click ", this.showEmployeeFormModel);
    this.showEmployeeFormModel = !this.showEmployeeFormModel;
    console.log("After Click ", this.showEmployeeFormModel);
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.showDeleteAlert(employee);
  }

  insertNewRecord(employeeObject: any) {
    console.log(employeeObject);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

    this.employees.push(employeeObject);
    console.log(employeeObject);
    console.log(this.employees)
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
