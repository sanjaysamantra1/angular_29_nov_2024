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
    CrudEmployeesComponent
    
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
