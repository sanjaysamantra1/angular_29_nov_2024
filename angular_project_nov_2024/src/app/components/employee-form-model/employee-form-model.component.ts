import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form-model',
  imports: [FormsModule],
  templateUrl: './employee-form-model.component.html',
  styleUrl: './employee-form-model.component.css',
  outputs: ['employeeEvent']
})
export class EmployeeFormModelComponent {
  eId: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';

  employeeObject = Object.create(null);

  employeeEvent = new EventEmitter();

  insertNewRecord(){
    this.employeeObject.eId = this.eId;
    this.employeeObject.name = this.eName;
    this.employeeObject.sal = this.eSalary;
    this.employeeObject.gender = this.eGender;
    console.log(this.employeeObject);
    this.employeeEvent.emit(this.employeeObject);
  }

}
