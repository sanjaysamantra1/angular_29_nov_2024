import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as employeeData from './user.json';
import { Injectable } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-employee',
  imports: [NgxPaginationModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeList = (employeeData as any).default;
  isTableView: boolean = true;
  isDarkMode: boolean = true;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    console.log("Theme toggled");
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  employees = [
    { id: 101, name: 'Sanjay', salary: 5000, gender: 'Male' },
    { id: 104, name: 'Geeta', salary: 8000, gender: 'Female' },
    { id: 103, name: 'Sameer', salary: 7000, gender: 'Male' },
    { id: 102, name: 'Sita', salary: 9000, gender: 'Female' },
    { id: 105, name: 'Deepak', salary: 8000, gender: 'Male' }
  ];

  currentPage: any;
}
