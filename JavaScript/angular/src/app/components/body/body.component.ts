import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../product_list/demo1.component';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,DirectivesComponent,UserListComponent,Demo1Component,ModalComponent,EmployeeCRUDComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
