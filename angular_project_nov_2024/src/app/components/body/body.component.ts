import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeesComponent } from "../employees/employees.component";
import { DirectivesComponent } from "../directives/directives.component";
import { ProductsComponent } from "../products/products.component";
import { Demo1Component } from "../demo1/demo1.component";
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from "../pipes/pipes.component";
import { ParentComponent } from "../parent/parent.component";
import { MyModalComponent } from "../my-modal/my-modal.component";
import { FormModalComponent } from "../form-modal/form-modal.component";
import { FatherComponent } from "../father/father.component";
import { TrafficLightComponent } from "../traffic-light/traffic-light.component";
import { EmployeeComponent } from "../employee/employee.component";
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent, EmployeesComponent, DirectivesComponent, Demo1Component, ProductsComponent, EmployeeCRUDComponent, PipesComponent, ParentComponent, MyModalComponent, FormModalComponent, FatherComponent, TrafficLightComponent, EmployeeComponent, UserComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
