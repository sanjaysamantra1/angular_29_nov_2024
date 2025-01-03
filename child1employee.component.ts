import { Component,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1employee',
  imports: [FormsModule],
  templateUrl: './child1employee.component.html',
  styleUrl: './child1employee.component.css',
  outputs :['employeeEvent']
})
export class Child1employeeComponent {

  employeeEvent = new EventEmitter();

  flag : boolean = false;
  
  // employee =  { name: 'x', serialNo : '1',designation: 'Software Engineer' }

  sendemployeedata(event : Event, formData : any){
      this.employeeEvent.emit(formData.value);
      formData.reset();
      this.flag = false;
    }

}
