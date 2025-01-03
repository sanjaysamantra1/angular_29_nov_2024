import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';

@Component({
  selector: 'app-employee-table-and-card-format',
  imports: [DatabindingComponent],
  templateUrl: './employee-table-and-card-format.component.html',
  styleUrl: './employee-table-and-card-format.component.css'
})
export class EmployeeTableAndCardFormatComponent {
  isTableView: boolean = true;
  showAssignment: boolean = true;
  employees = [
    { id: 1, name: 'Akshay Joshi', position: 'Software Engineer', department: 'IT', image_url: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 2, name: 'Bharath Guntaka', position: 'Product Manager', department: 'Management', image_url: 'https://www.w3schools.com/howto/img_avatar2.png' },
    { id: 3, name: 'Phani Kumar', position: 'UI/UX Designer', department: 'Design', image_url: 'https://www.w3schools.com/howto/img_avatar.png'},
    { id: 4, name: 'Manohar Kumar', position: 'QA Engineer', department: 'Quality Assurance', image_url: 'https://www.w3schools.com/howto/img_avatar2.png' },
  ];

}
