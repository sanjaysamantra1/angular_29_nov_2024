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
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { UsersComponent } from '../users/users.component';
import { Demo2Component } from '../demo2/demo2.component';
// import { EmpDetailsComponent } from '../empdetails/empdetails.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { EmployeeComponent } from '../employee/employee.component';
import { UserComponent } from '../user/user.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { ObservablesComponent } from '../observables/observables.component';
import { SwitchmapComponent } from '../switchmap/switchmap.component';




@Component({
  selector: 'app-body',
  imports: [EmployeesComponent, 
            DirectivesComponent, 
            Demo1Component, 
            ProductsComponent, 
            EmployeeCRUDComponent, 
            PipesComponent, 
            ParentComponent, 
            MyModalComponent, 
            FormModalComponent, 
            DatabindingComponent,
            TrafficLightComponent,
            Math1Component,
            Math2Component,
            UsersComponent,
            Demo2Component,
            // EmpDetailsComponent,
            HttpDemo1Component,
            EmployeeComponent,
            UserComponent,
            ProductListComponent,
            LoadingComponent,
            ObservablesComponent,
            SwitchmapComponent
            ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}