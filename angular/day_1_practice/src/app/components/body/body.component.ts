import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { SweetalertDemoComponent } from '../sweetalert-demo/sweetalert-demo.component';
import { ProductsAssignmentComponent } from '../products-assignment/products-assignment.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PipesComponent } from '../pipes/pipes.component';

@Component({
    selector: 'app-body',
    imports: [
        DatabindingComponent,
        DirectivesComponent,
        UserListComponent,
        SweetalertDemoComponent,
        ProductsAssignmentComponent,
        HighlightDirective,
        NumberonlyDirective,
        MyModalComponent,
        EmployeeComponent,
        PipesComponent,
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class BodyComponent {}
