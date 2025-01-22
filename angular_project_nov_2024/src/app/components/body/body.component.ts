import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { UsersComponent } from '../users/users.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Message3Component } from '../message3/message3.component';
import { SignalDemo1Component } from '../signal-demo1/signal-demo1.component';
import { SignalDemo2Component } from '../signal-demo2/signal-demo2.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent,
    // UserListComponent,
    // Demo1Component,
    // MyModalComponent,
    // PipesComponent,
    // ParentComponent,
    // TrafficLightComponent
    // Demo1Component,
    // Demo2Component,
    // Math1Component,
    // Math2Component
    // UsersComponent,
    // HttpDemo1Component,
    // ProductListComponent,
    // LoadingComponent,
    // ObservableDemo1Component
    // ObservableDemo2Component
    // ObservableDemo3Component
    // SubjectDemo1Component
    // Message1Component,
    // Message2Component,
    // Message3Component
    // SignalDemo1Component
    SignalDemo2Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
