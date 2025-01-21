import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { PipesComponent } from '../pipes/pipes.component';
import { StudentCrudComponent } from '../student-crud/student-crud.component';
import { ItemsListComponent } from '../items-list/items-list.component';
import { UsersComponent } from '../users/users.component';
import { Demo1Component } from '../demo1/demo1.component';
import { TrafficLightsComponent } from '../traffic-lights/traffic-lights.component';
import { EmployeeComponent } from '../employee/employee.component';
import { CrudEmployeesComponent } from '../crud-employees/crud-employees.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { DemouserComponent } from '../demouser/demouser.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';

@Component({
  selector: 'app-body',
  imports: [PipesComponent,
    StudentCrudComponent,
    ItemsListComponent,
    DatabindingComponent,
    UsersComponent,
    Demo1Component,
    TrafficLightsComponent,
    EmployeeComponent,
    CrudEmployeesComponent,
    Math1Component,
    Math2Component,
    DemouserComponent,
    ObservableDemo1Component,
    ObservableDemo2Component
    
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
