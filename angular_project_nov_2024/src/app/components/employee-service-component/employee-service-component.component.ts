import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-service-component',
  imports: [FormsModule],
  templateUrl: './employee-service-component.component.html',
  styleUrl: './employee-service-component.component.css'
})
export class EmployeeServiceComponentComponent {

    employees: any;
    selectedOption: string = "all";

    empService = inject(EmployeeService);  // Dependency Injection

    ngOnInt(){
      this.employees = this.empService.employees;
    }

    ngDoCheck() {
      if(this.selectedOption == "male"){
        this.employees = this.empService.getMaleEmployees();
      }
      else if(this.selectedOption == "female"){
        this.employees = this.empService.getFemaleEmployees();
      }else{
        this.employees = this.empService.getAllEmployees();
      }
    }

}
