import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee = [
    { eId: 101, name: 'Alice', age: 30, deptId: 'D001' },
    { eId: 102, name: 'Bob', age: 25, deptId: 'D002' },
    { eId: 103, name: 'Charlie', age: 35, deptId: 'D003' },
    { eId: 104, name: 'Diana', age: 28, deptId: 'D004' }
  ];
}