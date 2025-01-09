import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees:any;
  selectedValue: string = "all";
  employeeService = inject(EmployeeService);

  ngOnInit() {
    this.employees = this.employeeService.employees;
  }

  ngDoCheck() {
    console.log(this.selectedValue);
    if (this.selectedValue == "male") {
      this.employees = this.employeeService.maleEmployees();
    } else if (this.selectedValue == "female") {
      this.employees = this.employeeService.femaleEmployees();
    } else if (this.selectedValue == "all") {
      this.employees = this.employeeService.allEmployees();
    }
  }


}
