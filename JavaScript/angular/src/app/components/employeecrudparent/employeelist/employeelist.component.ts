import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  imports: [],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
  inputs:['employeesDataFromParent'],
  outputs:['deleteEmp'],
  // encapsulation:ViewEncapsulation.None
})
export class EmployeelistComponent {
  employeesDataFromParent: any[] = [];

deleteEmp = new EventEmitter();

deleteEmployee(index:number):void{
  this.deleteEmp.emit(index);
}


}
