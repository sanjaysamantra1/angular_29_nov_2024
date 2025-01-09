import { Component } from '@angular/core';
import { EmployeeserviceService } from '../../services/service/employeeservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecomp',
  imports: [FormsModule],
  templateUrl: './employeecomp.component.html',
  styleUrl: './employeecomp.component.css'
})
export class EmployeecompComponent {

  allEmp:any;
  maleEmp:any;
  femaleEmp:any;
  view:boolean = false;
  
  selectedOption:string = 'All Employees';

  constructor(private empService: EmployeeserviceService){
  }


  ngOnInit(){
    console.log(this.empService);
    console.log(this.empService.allEmployees());
    console.log(this.empService.maleEmployees());
    console.log(this.empService.femaleEmployees());
    this.allEmp=this.empService.allEmployees();
    this.maleEmp=this.empService.maleEmployees();
    this.femaleEmp=this.empService.femaleEmployees();
  }
  
}
