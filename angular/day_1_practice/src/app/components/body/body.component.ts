import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { SweetalertDemoComponent } from "../sweetalert-demo/sweetalert-demo.component";
import { ProductsAssignmentComponent } from "../products-assignment/products-assignment.component";

@Component({
    selector: 'app-body',
    imports: [DatabindingComponent, DirectivesComponent, UserListComponent, SweetalertDemoComponent, ProductsAssignmentComponent],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class BodyComponent {}
