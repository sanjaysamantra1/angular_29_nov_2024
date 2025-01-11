import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrl: './form-modal.component.css',
  outputs: ['addEmployeeEvent']
})
export class FormModalComponent {

  eId: number = 0;
    eName: string = '';
    eSalary: number = 0;
    eGender: string = '';
  
    employeeObject = Object.create(null);
  
    addEmployeeEvent = new EventEmitter();
  
    insertNewRecord(){
      this.employeeObject.eId = this.eId;
      this.employeeObject.name = this.eName;
      this.employeeObject.sal = this.eSalary;
      this.employeeObject.gender = this.eGender;
      console.log(this.employeeObject);
      this.addEmployeeEvent.emit(this.employeeObject);
    }

}