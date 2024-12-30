import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  imports: [],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
  inputs:['employees'],
  outputs:['deleteEmp']
})
export class EmployeelistComponent {
employees: any[] = [];

deleteEmp = new EventEmitter();

deleteEmployee(index:number):void{
  this.deleteEmp.emit(index);
}


}
