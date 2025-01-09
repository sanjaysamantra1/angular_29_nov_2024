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
    console.log(this.input);
    if (this.input == "male") {
      this.emp = this.employeeService.getMaleEmployees();
    } else if (this.input == "female") {
      this.emp = this.employeeService.getFemaleEmployees();
    } else if (this.input == "all") {
      this.emp = this.employeeService.getAllEmployees();
    }
  }

}