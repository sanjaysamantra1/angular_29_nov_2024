import { Component } from '@angular/core';
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

  // Static array of employees
  employees = [
    { Id: 1, Name: 'John Doe', Designation: 'Software Engineer' },
    { Id: 2, Name: 'Jane Smith', Designation: 'Product Manager' },
    { Id: 3, Name: 'Samuel Green', Designation: 'UX Designer' }
  ];
  copyOfEmployees: any = this.employees;

  p: any;
  showFlag: boolean = false;
  selectedEmployee: any = '';

  // Properties for new employee form
  id: number = 0;
  name: string = '';
  designation: string = '';

  employeeObject = Object.create(null);

  getCurrentRecord(employee: any) {
    console.log("Current Record ", employee.Id);
    this.showFlag = !this.showFlag;
    this.selectedEmployee = employee;
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.showDeleteAlert(employee);
  }

  insertNewRecord() {
    console.log(this.id + ' ' + this.name + ' ' + this.designation);
    this.employeeObject = {
      Id: this.id,
      Name: this.name,
      Designation: this.designation
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

    this.employees.push(this.employeeObject);
    this.employeeObject = null;
    this.id = 0;
    this.name = '';
    this.designation = '';
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
      title: `Are you sure you want to delete employee ${employee.Name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.employees.indexOf(employee);
        const deletedEmployee = this.employees.splice(index, 1);
        console.log(deletedEmployee);
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: `Employee ${deletedEmployee[0].Name} has been deleted.`,
          icon: "success"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: `Your Employee ${employee.Name} is safe :)`,
          icon: "error"
        });
      }
    });
  }
}
