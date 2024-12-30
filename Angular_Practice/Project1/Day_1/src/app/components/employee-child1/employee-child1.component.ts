import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-child1',
  imports: [],
  templateUrl: './employee-child1.component.html',
  styleUrl: './employee-child1.component.css',
  inputs:['employeeDataToChild1'],
outputs:['deleteEmployeeEvent']
})
export class EmployeeChild1Component {

  myName:any='max'
employeeDataToChild1:any;


deleteEmployeeEvent = new  EventEmitter();

deleteEmployee(employeeId: any){
  console.log("Deleted employee details ", employeeId);
  this.deleteEmployeeEvent.emit(employeeId); 
}

}

