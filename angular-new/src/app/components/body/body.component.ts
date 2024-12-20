import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { DirectivesComponent } from '../directives/directives.component';
import { Demo2Component } from '../demo2/demo2.component';
import { PaginationassignComponent } from '../paginationassign/paginationassign.component';

@Component({
  selector: 'app-body',
  imports: [
    //UserListComponent,
    //DirectivesComponent,
    //Demo2Component,
    PaginationassignComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
