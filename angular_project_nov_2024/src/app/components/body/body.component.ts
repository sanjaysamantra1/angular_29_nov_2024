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
import { FatherComponent } from "../father/father.component";
import { TrafficLightComponent } from "../traffic-light/traffic-light.component";
import { EmployeeComponent } from "../employee/employee.component";
import { UserComponent } from "../user/user.component";
import { Demo2Component } from "../demo2/demo2.component";
import { Math1Component } from "../math1/math1.component";
import { Math2Component } from "../math2/math2.component";
import { FormDemo1Component } from "../form-demo-1/form-demo-1.component";
import { HttpDemo1Component } from "../http-demo1/http-demo1.component";
import { UsersComponent } from "../users/users.component";
import { UserWithModelsComponent } from "../user-with-models/user-with-models.component";
import { LoadingComponent } from "../loading/loading.component";
import { TemplateDrivenFormComponent } from "../template-driven-form/template-driven-form.component";
import { TemplateDrivenForm2Component } from "../template-driven-form2/template-driven-form2.component";
import { ObservableDemo1Component } from "../observable-demo1/observable-demo1.component";
import { ObservableDemo2Component } from "../observable-demo2/observable-demo2.component";
import { ObservableDemo3Component } from "../observable-demo3/observable-demo3.component";
import { Message1Component } from "../message1/message1.component";
import { Message2Component } from "../message2/message2.component";
import { Message3Component } from "../message3/message3.component";
import { SubjectDemo1Component } from "../subject-demo1/subject-demo1.component";
import { SignalDemo1Component } from "../signal-demo1/signal-demo1.component";
import { SignalDemo2Component } from "../signal-demo2/signal-demo2.component";
import { TemplateDrivenForm3Component } from "../template-driven-form3/template-driven-form3.component";
import { TemplateDrivenForm4Component } from "../template-driven-form4/template-driven-form4.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent, 
    EmployeesComponent, 
    DirectivesComponent, 
    Demo1Component, 
    ProductsComponent, 
    EmployeeCRUDComponent, 
    PipesComponent, 
    ParentComponent, 
    MyModalComponent, 
    FormModalComponent, 
    FatherComponent, 
    TrafficLightComponent, 
    EmployeeComponent, 
    UserComponent, 
    Demo2Component, 
    Math1Component, 
    Math2Component, 
    FormDemo1Component, 
    HttpDemo1Component, 
    UsersComponent, 
    UserWithModelsComponent, 
    LoadingComponent, 
    TemplateDrivenFormComponent, 
    TemplateDrivenForm2Component, 
    ObservableDemo1Component, 
    ObservableDemo2Component, 
    ObservableDemo3Component, 
    Message1Component,
    Message2Component,
    Message3Component,
    SubjectDemo1Component,
    SignalDemo1Component,
    SignalDemo2Component,
    TemplateDrivenForm3Component,
    TemplateDrivenForm4Component,
    RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag : boolean = true;

}
