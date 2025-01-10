import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as data from './user.json';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-employee',
  imports: [NgxPaginationModule, FormsModule, CommonModule, FontAwesomeModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
//myProducts = (data as any).default;
flag1: boolean = true;
flag:boolean = true;
employee:any;
selectedOption:any="";
flag2: boolean = false;
faSpinner: any = faSpinner;
constructor(private empService: EmployeeService) {
  this.employee = this.empService.getEmployees();
}
// need to take an object array and print the details in table and cards formate
ngDoCheck(){
  // if(this.employee==undefined){
  //   this.flag2 = true;
  // }else{
  //   this.flag2= false;
  // }
  if(this.selectedOption==""){
    this.employee=this.empService.getEmployees();
  }
  else{
    this.employee=this.empService.getFilteredEmp(this.selectedOption);
  }
  //console.log("qwerty"+this.employee);
}
p:any;




}
