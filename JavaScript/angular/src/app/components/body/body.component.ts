import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../product_list/demo1.component';
import { ModalComponent } from '../modal/modal.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeecrudparentComponent } from '../employeecrudparent/employeecrudparent.component';

@Component({
  selector: 'app-body',
  imports: [DatabindingComponent,DirectivesComponent,UserListComponent,Demo1Component,ModalComponent,EmployeeCRUDComponent,PipesComponent,ParentComponent,EmployeecrudparentComponent],
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

}
