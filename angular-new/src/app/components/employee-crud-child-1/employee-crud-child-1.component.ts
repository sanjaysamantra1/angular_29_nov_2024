import { Component, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-crud-child-1',
  imports: [FormsModule],
  templateUrl: './employee-crud-child-1.component.html',
  styleUrls: ['./employee-crud-child-1.component.css'],
  outputs: ['employeeAdded']
})
export class EmployeeCrudChild1Component {
  employeeAdded = new EventEmitter<any>();

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.employeeAdded.emit(form.value);
      form.reset();
    }
  }
}
