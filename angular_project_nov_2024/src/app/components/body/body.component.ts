import { Component } from '@angular/core';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { DatabindingComponent } from '../databinding/databinding.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ProductsComponent } from "../products/products.component";
import { MyModalComponent } from "../my-modal/my-modal.component";
import { ParentComponent } from '../parent/parent.component';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { EmployeeCRUDComponent } from '../employees-crud/employees-crud.component';
import { NgDoCheckComponent } from '../ng-do-check/ng-do-check.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { UsersComponent } from '../users/users.component';
import { EmployeeServiceComponentComponent } from '../employee-service-component/employee-service-component.component';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserListComponent,
    Demo1Component,
    PipesComponent,
    ProductsComponent,
    MyModalComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmployeeCRUDComponent,
    NgDoCheckComponent,
    Math1Component,
    Math2Component,
    UsersComponent,
    EmployeeServiceComponentComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
