import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-assignment',
  imports: [],
  templateUrl: './employee-assignment.component.html',
  styleUrl: './employee-assignment.component.css'
})
export class EmployeeAssignmentComponent {
  teamMembers = [
      { memberId: 201, fullName: 'Emily Clark', role: 'Backend Developer', division: 'Engineering' },
      { memberId: 202, fullName: 'David Lee', role: 'Product Manager', division: 'Product' },
      { memberId: 203, fullName: 'Sophia Martinez', role: 'UX Designer', division: 'Design' },
      { memberId: 204, fullName: 'James Taylor', role: 'QA Engineer', division: 'Quality Assurance' }  
  ];
}
