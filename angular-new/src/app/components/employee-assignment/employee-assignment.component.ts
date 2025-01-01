import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-assignment',
  imports: [
    FormsModule
  ],
  templateUrl: './employee-assignment.component.html',
  styleUrl: './employee-assignment.component.css'
})
export class EmployeeAssignmentComponent {
  flag: boolean = true;
  teamMembers = [
      { memberId: 201, fullName: 'Emily Clark', role: 'Backend Developer', division: 'Engineering' },
      { memberId: 202, fullName: 'David Lee', role: 'Product Manager', division: 'Product' },
      { memberId: 203, fullName: 'Sophia Martinez', role: 'UX Designer', division: 'Design' },
      { memberId: 204, fullName: 'James Taylor', role: 'QA Engineer', division: 'Quality Assurance' }  
  ];
  toggleView() {
    this.flag=!this.flag;
  };

  //Light and Dark mode

  isDarkMode = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  } 
}