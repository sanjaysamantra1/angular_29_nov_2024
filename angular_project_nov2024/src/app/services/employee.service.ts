import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  a: any;
  b: any;
  
  

  employees=[
    {eid: 501 ,ename:'Bubu',gender:'Male'},
    {eid: 502 ,ename:'Sree',gender:'Female'},
    {eid: 503 ,ename:'Chitti',gender:'Female'},
    {eid: 504 ,ename:'Bannu',gender:'Male'},
    {eid: 505 ,ename:'Minni',gender:'Female'}
  ];

  selectedemployees: any[] = this.employees;


  displayAll(){
    this.selectedemployees=this.employees;
    
  }
  displayMale(){

    this.selectedemployees = this.employees.filter((employee:any) => employee.gender === 'Male');
    
    
  }
  displayFemale(){
    this.selectedemployees = this.employees.filter((employee:any) => employee.gender === 'Female');
    
  }
}
