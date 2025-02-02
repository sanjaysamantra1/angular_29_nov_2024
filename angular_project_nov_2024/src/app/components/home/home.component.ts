import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';

@Component({
  selector: 'app-home',
  imports: [
    CounterComponent,
    EmployeeCrudComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
