import { Component, OnInit, } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  filterCriteria: string = 'allEmployees';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = [...this.employees];
  }

  onFilterChange(criteria: string): void {
    this.filterCriteria = criteria;
  
    if (criteria === 'allEmployees') {
      this.filteredEmployees = [...this.employees];
    } else if (criteria === 'male') {
      this.filteredEmployees = this.employees.filter((emp) => emp.gender === 'male');
    } else if (criteria === 'female') {
      this.filteredEmployees = this.employees.filter((emp) => emp.gender === 'female');
    }
  }
}
