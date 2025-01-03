import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1-employee-crud',
  imports: [FormsModule],
  templateUrl: './child1-employee-crud.component.html',
  styleUrl: './child1-employee-crud.component.css',
  outputs:['EmployeeEvent']
})
export class Child1EmployeeCrudComponent {
  flag:boolean = false;

  EmployeeEvent = new EventEmitter();
  sendEmployeeDataToParent(event:Event, formData:any){
    this.EmployeeEvent.emit(formData.value);
    formData.reset();
    this.flag=false;
  }
}
