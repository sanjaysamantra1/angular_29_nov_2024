import { Component } from '@angular/core';
import { EmployeeChild1Component } from "../employee-child1/employee-child1.component";
import { EmployeeChild2Component } from "../employee-child2/employee-child2.component";

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeChild1Component, EmployeeChild2Component],
  templateUrl: './employee-parent.component.html',
  styleUrl: './employee-parent.component.css'
})
export class EmployeeParentComponent {

myName:String="sachin";

employeesAr = [
  { id: 1, name: 'Dheeraj', position: 'Software Developer', salary: 75000 },
  { id: 2, name: 'Sankeerth', position: 'UI/UX Designer', salary: 65000 },
  { id: 3, name: 'Dhanush', position: 'Project Manager', salary: 90000 },
  { id: 4, name: 'Vamsi', position: 'QA Engineer', salary: 60000 },
  { id: 5, name: 'Chenna', position: 'DevOps Engineer', salary: 85000 },
 
];
deletedEmployee(employeeId: any): void {
  console.log('Emitting delete event for employee ID:', employeeId);
  this.employeesAr = this.employeesAr.filter(employee => employee.id !== employeeId);
}
addingEmployee(employee:any) : void {
  if(employee.name&&employee.position&&employee.salary){
  const empId=this.employeesAr.length+1;
  console.log("Added details are:" +employee);
  this.employeesAr.push(employee)
  
  this.employeesAr.push(...employee);
  }else{alert('all field are required')}
  

}
}
