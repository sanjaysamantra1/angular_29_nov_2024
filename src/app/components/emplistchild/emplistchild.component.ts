import { CommonModule } from '@angular/common';
import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emplistchild',
  imports: [CommonModule],
  templateUrl: './emplistchild.component.html',
  styleUrl: './emplistchild.component.css',
  inputs:['EmployeeListData'],
  outputs:['employeeemitter']
})
export class EmplistchildComponent {
  EmployeeListData: { name: string; salary: number }[] = [];

  employeeemitter=new EventEmitter<number>();
  deleteThisRecord(index:number)
  {
    this.employeeemitter.emit(index);
  }


}
