import { Component } from '@angular/core';
import { Child1Component } from '../parent/child1/child1.component';
import { Child2Component } from '../parent/child2/child2.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addEmployee/addemployee.component';

@Component({
  selector: 'app-employeecrudparent',
  imports: [EmployeelistComponent,AddemployeeComponent],
  templateUrl: './employeecrudparent.component.html',
  styleUrl: './employeecrudparent.component.css'
})
export class EmployeecrudparentComponent {

  employees=[
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  onDeleteEmployee(index:number):void{
    if(confirm('Are You Sure Yo Want To Delete?')){
      this.employees.splice(index,1);
    }
}

check(){
  console.log(this.employees);
  
}
  addEmployee(newEmployee:{eId:number,name:string,sal:number,gender:string}){
    this.employees.push(newEmployee);
    // console.log(newEmployee);
    
}

}
