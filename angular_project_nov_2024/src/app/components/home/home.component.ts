import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { TodoCrudComponent } from '../todo-crud/todo-crud.component';
import { MaterialDemoComponent } from '../material-demo/material-demo.component';

@Component({
  selector: 'app-home',
  imports: [
    CounterComponent,
    EmployeeCrudComponent,
    TodoCrudComponent,
    MaterialDemoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
