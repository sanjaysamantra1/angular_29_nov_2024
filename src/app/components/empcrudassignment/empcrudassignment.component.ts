import { Component } from '@angular/core';
import { EmplistchildComponent } from '../emplistchild/emplistchild.component';
import { AddempchildComponent } from '../addempchild/addempchild.component';
import Swal from 'sweetalert2';

interface EmployeeData{
  name:string,
  salary:number
}


@Component({
  selector: 'app-empcrudassignment',
  imports: [EmplistchildComponent,AddempchildComponent],
  templateUrl: './empcrudassignment.component.html',
  styleUrl: './empcrudassignment.component.css'
})
export class EmpcrudassignmentComponent {
  Employees:EmployeeData[]=[{name:"Sagar D",salary:9000000},
    {name:"Neelima",salary:800000},
    {name:"John Doe",salary:700000}
  ];
  deleteThisRecord(index:number)
  {
    this.Employees.splice(index,1);
    Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
  }
  AddRecord(employee:{name:string,salary:number})
  {
    this.Employees.push(employee);
    Swal.fire('Employee Added!', 'Employee has been Added.', 'success');
  }


}
