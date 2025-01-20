import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from '../pipes/pipes.component';
import { ProductsComponent } from "../products/products.component";
import { StudentCrudComponent } from "../student-crud/student-crud.component";
import { StudentListComponent } from "../student-list/student-list.component";
import { ItemListComponent } from "../item-list/item-list.component";
import { UsersComponent } from "../users/users.component";
import { TrafficLightsComponent } from "../traffic-lights/traffic-lights.component";
import { EmployeeServiceCompComponent } from "../employee-service-comp/employee-service-comp.component";
import { HttpDemo1Component } from "../http-demo1/http-demo1.component";
import { InternComponentComponent } from "../intern-component/intern-component.component";
import { TrafficLightComponent } from "../traffic-light/traffic-light.component";
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from "../math1/math1.component";
import { Math2Component } from '../math2/math2.component';
import { DemoUserComponent } from "../demo-user/demo-user.component";

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserListComponent,
    Demo1Component,
    Demo2Component,
    EmployeeCRUDComponent, PipesComponent,
    ProductsComponent,
    StudentCrudComponent,
    ItemListComponent,
    UsersComponent,
    TrafficLightsComponent,
    EmployeeServiceCompComponent,
    HttpDemo1Component,
    InternComponentComponent,
    TrafficLightComponent,
    Math1Component,
    Math2Component,
    DemoUserComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
flag:boolean=true;
 

}
