import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../directives/user-list/user-list.component';
import { Demo1Component } from '../product_list/demo1.component';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeecrudparentComponent } from '../employeecrudparent/employeecrudparent.component';
import { TrafficlightComponent } from '../trafficlight/trafficlight.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { UsersComponent } from '../../components/users/users.component';
import { EmployeecompComponent } from '../employeecomp/employeecomp.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,DirectivesComponent,UserListComponent,Demo1Component,ModalComponent,EmployeeCRUDComponent,PipesComponent,ParentComponent,EmployeecrudparentComponent,TrafficlightComponent,Math1Component,Math2Component,UsersComponent,EmployeecompComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  dataBinding:boolean=false;
  directives: boolean=false;
  productList:boolean=false;
  modalConcept: boolean =false;
  Pipes: boolean =false;
  ParentChild: boolean =false;
  trafficLight: boolean=false;
  appUsers:boolean =false;
  math1:boolean=false;
  math2:boolean=false;
  empcomp:boolean=false;

  dataBindingF(){
    this.dataBinding=!this.dataBinding;
  }
  directivesF(){
    this.directives=!this.directives;
  }
  productListF(){
    this.productList=!this.productList;
  }
  modalConceptF(){
    this.modalConcept=!this.modalConcept;
  }
  pipesF(){
    this.Pipes=!this.Pipes;
  }
  parentChildF(){
    this.ParentChild=!this.ParentChild;
  }

  trafficLightF(){
    this.trafficLight=!this.trafficLight;
  }
}
