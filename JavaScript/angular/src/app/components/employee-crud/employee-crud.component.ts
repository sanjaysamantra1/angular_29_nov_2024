import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  // i have took the array employyes
  employees=[
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  // new employee reference
  newEmployee = {eId:0,name:'',sal:0,gender:''};


  addEmployee=()=>{
    if(this.newEmployee.eId&&this.newEmployee.name&&this.newEmployee.sal&&this.newEmployee.gender){
      this.employees.push({...this.newEmployee});

      Swal.fire({
        title:'Employee Added!',
        text: `${this.newEmployee.name} has been successfully added.`,
        icon: 'success',
        confirmButtonText: 'OK',
      })
      this.newEmployee={eId:0,name: '',sal:0,gender:''};
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the required feilds.',
        icon:'error',
        confirmButtonText:'OK',
      })
    }
  }

  // if i click yes then it will go to then and check conditon and it wil delete else it wont affect the table
  deleteEmployee=(index: number)=>{
    Swal.fire({
      title: 'Delete Employee?',
      text: 'Are You Sure you Want to Delete this Employee?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result)=>{
      if(result.isConfirmed){
        this.employees.splice(index,1);
        Swal.fire('Deleted!', 'Employee Has been Deleted.','success');
      }
      else{
        console.log("No");
        
      }
    });
  }
}
