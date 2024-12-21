import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeesComponent } from "../employees/employees.component";
import { DirectivesComponent } from "../directives/directives.component";
import { ProductsComponent } from "../products/products.component";
import { Demo1Component } from "../demo1/demo1.component";
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from "../pipes/pipes.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, EmployeesComponent, DirectivesComponent, Demo1Component, ProductsComponent, EmployeeCRUDComponent, PipesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
