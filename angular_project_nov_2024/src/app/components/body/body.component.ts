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
import { EmpCrudHttpServiceComponent } from '../emp-crud-http-service/emp-crud-http-service.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo2Component } from "../demo2/demo2.component";
import { HttpDemo1Component } from "../http-demo1/http-demo1.component";
import { UserWithModelComponent } from "../user-with-model/user-with-model.component";
import { LoadingComponent } from "../loading/loading.component";

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
    EmployeeServiceComponentComponent,
    EmpCrudHttpServiceComponent,
    ProductListComponent,
    Demo1Component,
    Demo2Component,
    HttpDemo1Component,
    UserWithModelComponent,
    LoadingComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
