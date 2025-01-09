import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmpDetailsComponent{

  emp:any;
  input: string = "all";
  employeeService = inject(EmployeeService);

  ngOnInit() {
    this.emp = this.employeeService.employeeList;
  }

  ngDoCheck() {
    console.log('Selected Value:', this.input);
    
    switch (this.input) {
      case 'male':
        this.emp = this.employeeService.getMaleEmployees();
        break;
      case 'female':
        this.emp = this.employeeService.getFemaleEmployees();
        break;
      case 'all':
      default:
        this.emp = this.employeeService.getAllEmployees();
        break;
    }
    
    console.log('Filtered Employees:', this.emp);
  }
}
  