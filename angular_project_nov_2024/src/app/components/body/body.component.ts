import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from '../pipes/pipes.component';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserListComponent,
    Demo1Component,
    EmployeeCRUDComponent, PipesComponent,
    ProductsComponent,
    
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

 

}
