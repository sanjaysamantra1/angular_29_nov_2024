import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';

@Component({
  selector: 'app-parent',
  imports: [

    Child1Component,
    Child2Component
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  getEmpFromChild2(newEmp: any){
    this.employee.push(newEmp);
  }
index:any;
  deleteEmployee(emp: any){
    this.index = this.employee.indexOf(emp);
    if(this.index != null){
      this.employee.splice(this.index,1);
    }
  }




}
