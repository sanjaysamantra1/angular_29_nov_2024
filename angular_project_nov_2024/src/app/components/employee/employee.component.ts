import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as data from './user.json';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-employee',
  imports: [NgxPaginationModule, FormsModule
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
constructor(private empService: EmployeeService) {
  this.employee = this.empService.getEmployees();
}
//need to take an object array and print the details in table and cards formate
ngDoCheck(){
  console.log(this.selectedOption);
  if(this.selectedOption==""){
    this.employee=this.empService.getEmployees();
  }
  else{
    this.employee=this.empService.getFilteredEmp(this.selectedOption);
  }

}
p:any;




}
