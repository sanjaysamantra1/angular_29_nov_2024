import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as employees from './employee1.json'

import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar'
import { SlicePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-emp-crud-practice',
  imports: [FormsModule,NgxPaginationModule],
  templateUrl: './emp-crud-practice.component.html',
  styleUrl: './emp-crud-practice.component.css'
})
export class EmpCrudPracticeComponent {

  
flag:boolean=false;
selectedEmp:any=String

p:any;
s:any;
  employees = [
    { id: 1, name: 'Dheeraj', position: 'Software Developer', salary: 75000 },
    { id: 2, name: 'Sankeerth', position: 'UI/UX Designer', salary: 65000 },
    { id: 3, name: 'Dhanush', position: 'Project Manager', salary: 90000 },
    { id: 4, name: 'Vamsi', position: 'QA Engineer', salary: 60000 },
    { id: 5, name: 'Chenna', position: 'DevOps Engineer', salary: 85000 },
   
  ];

  // employees=(employees as any).default

  viewEmp(emp:any):void{
   new Snackbar ("hello",{position:'top-right', theme:'light' });
this.selectedEmp={...emp}
  }

  deleteEmp(emp:any):any{
    Swal.fire({
      title:'Delete Employee',
      text:'Would you like to delete employee'+emp.id+'',
      icon:'warning',
      showCancelButton:true,
    cancelButtonColor:'red',
    showConfirmButton:true,
    confirmButtonColor:'light blue',
    confirmButtonText:'Confirm to delete'

    }).then((result)=>
    
    {
      if(result.isConfirmed){
      this.selectedEmp=this.employees.splice(this.employees.indexOf(emp),1)
      }
      else{
        result.dismiss === Swal.DismissReason.cancel
      }
      // if(result.isConfirmed)
      // {
      //    this.employees=this.employees.filter(id=>id.id!==emp.id);
      //   if(this.selectedEmp.id===emp)
      //     this.selectedEmp=null
      //   Swal.fire("deleted ","Deleted Employee "+emp.name+"",'success')
      // }
      
    })
  }
  changeValue(){
    this.flag=!this.flag
  }
}
