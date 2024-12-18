import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeesComponent } from "../employees/employees.component";
import { DirectivesComponent } from "../directives/directives.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, EmployeesComponent, DirectivesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
