import { Component,EventEmitter } from '@angular/core';
import { EmployeeChild1Component } from '../employee-child1/employee-child1.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-child2',
  imports: [FormsModule],
  templateUrl: './employee-child2.component.html',
  styleUrl: './employee-child2.component.css',
 inputs:['child1Reference'],
 outputs:['addEmployeeEvent']
})
export class EmployeeChild2Component {

  child1Reference:any;

  addEmployeeEvent =new EventEmitter;

  newEmployee ={name:'',
    position:'',
    salary:0

  }

  addEmployee(name:any, position:any,salary:any){
    console.log(this.newEmployee.name+ ""+this.newEmployee.position+""+this.newEmployee.salary);
    this.addEmployeeEvent.emit(this.newEmployee);

  }
}
