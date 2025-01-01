import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as data from './user.json';
import { Injectable } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-employee',
  imports: [NgxPaginationModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
myProducts = (data as any).default;
flag1: boolean = true;
flag:boolean = true;
constructor(private renderer: Renderer2) {}
toggleMode() {
  console.log("Button clicked");
  this.flag = !this.flag;
  console.log(this.flag);
  if (this.flag) {
    var ele =  document.body;
    console.log(ele);
    //ele.classList.toggle('dark-theme', this.flag);
    this.renderer.addClass(document.body, 'dark-theme');
  } else {
    console.log("light");
    document.body.classList.remove('dark-theme');
  }
}
//need to take an object array and print the details in table and cards formate
employee = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

p:any;




}
