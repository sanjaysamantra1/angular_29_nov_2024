import { Component } from '@angular/core';
import * as employeesData from './employees.json';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {

  employees: any[] = (employeesData as any).default;

  showForm : boolean = false;

  view(employee : any) : void {
    Swal.fire({
      title: `<strong>Employee Details</strong>`,
      html: `
        <p><strong>Id:</strong> ${employee.id}</p>
        <p><strong>Name:</strong> ${employee.name}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Designation:</strong> ${employee.designation}</p>
         <p><strong>Salary:</strong> ${employee.salary}</p>
      `,
      // icon: 'info',
      showCloseButton: true,
      showConfirmButton: false,
    });

  }

  deleteRow(id: number) : void {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(employee => employee.id !== id);
        Swal.fire({
          title: "Deleted!",
          text: "Employee record has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

  showEmployeeForm() : void{
    this.showForm = true;
  }

  onSubmit(form : any) : void{
    console.log("Submitted");
    console.log(form);
    if(form.valid){
      console.log("Form is valid");
      this.employees.push(form.value);
      form.reset();
      this.showForm = false;
      // Swal.fire('Good job!', 'You clicked the button!', 'success');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Employee record has been added successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

}
