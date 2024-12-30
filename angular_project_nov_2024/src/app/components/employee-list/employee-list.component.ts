import { Component, EventEmitter } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-employee-list',
  imports: [NgxPaginationModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  inputs: ['employees'],
  outputs: ['employeeEvent']
})
export class EmployeeListComponent {
  p: any;
  employees: any;
  showFlag: boolean = false;
  selectedEmployee: any = '';
  employeeEvent = new EventEmitter();
  flag: boolean = true;

  onClickChange() {
    console.log(!this.flag);
    return this.flag = !this.flag;
  }

  getCurrentRecord(employee: any) {
    console.log("Current Record ", employee.eId);
    this.showFlag = !this.showFlag;
    this.selectedEmployee = employee;
  }

  getRecordToDelete(employee: any) {
    console.log("Delete ", employee);
    this.employeeEvent.emit(employee);
  }

}
