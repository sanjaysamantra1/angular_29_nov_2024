import { Component } from '@angular/core';
import { MyServiceService } from '../Service/my-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees: any[] = [];
  dropdownValue: string = 'allEmployees'; // Default value for dropdown

  constructor(private employeeService: MyServiceService) {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employees = this.employeeService.filterEmployees(this.dropdownValue);
  }

  onDropdownChange(value: string): void {
    this.dropdownValue = value;
    this.getEmployees();
  }
}
