import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
//need to take an object array and print the details in table and cards formate
employee = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];






}