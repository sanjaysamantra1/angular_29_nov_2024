import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-crud-child-2',
  standalone : true,
  templateUrl: './employee-crud-child-2.component.html',
  styleUrls: ['./employee-crud-child-2.component.css'],
  inputs: ['employees'],
  outputs: ['view', 'delete'],
})
export class EmployeeCrudChild2Component {
  employees :  any;
  view = new EventEmitter<any>();
  delete = new EventEmitter<number>();
}
