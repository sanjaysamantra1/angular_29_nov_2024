import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2-employee-details',
  imports: [FormsModule],
  templateUrl: './child2-employee-details.component.html',
  styleUrl: './child2-employee-details.component.css',
  inputs:['employeeListFromParent'],
  outputs:['delEmp','viewEmp']
})
export class Child2EmployeeDetailsComponent {

  employeeListFromParent:any;
  viewEmp = new EventEmitter();

  viewChildEmployee(index:any){
    this.viewEmp.emit(index);
  }

  delEmp = new EventEmitter();

  delChildEmployee(index:any):void{
    this.delEmp.emit(index);
  }
}
