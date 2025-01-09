import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { DirectivesComponent } from '../directives/directives.component';
import { Demo2Component } from '../demo2/demo2.component';
import { PaginationassignComponent } from '../paginationassign/paginationassign.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { DatabindingComponent } from '../databinding/databinding.component';
import { EmployeeAssignmentComponent } from '../employee-assignment/employee-assignment.component';
import { DatabindingassignComponent } from '../databindingassign/databindingassign.component';
import { TrafficSignalComponent } from "../traffic-signal/traffic-signal.component";
import { UsersComponent } from "../users/users.component";
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingassignComponent,
    // EmployeeAssignmentComponent,
    // UserListComponent,
    // PaginationassignComponent,
    // PipesComponent,
    // EmployeeCrudComponent,
    // TrafficSignalComponent,
    EmployeeComponent,
    UsersComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
