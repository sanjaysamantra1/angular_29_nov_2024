import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  outputs: ["addEmployeeEvent"]
})
export class UserFormComponent {
  // id: number = 0;
  eName: string = '';
  eSalary: number = 0;
  eGender: string = '';

  employeeObject = Object.create(null);

  addEmployeeEvent = new EventEmitter();

  insertNewRecord() {
    if (this.eName == null || this.eName == '') {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong please check the data you have entered!"
      });
    } else {
      // this.employeeObject.id = this.id;
      this.employeeObject.name = this.eName;
      this.employeeObject.sal = this.eSalary;
      this.employeeObject.gender = this.eGender;
      console.log(this.employeeObject);
      this.addEmployeeEvent.emit(this.employeeObject);
      this.eName = '';
      this.eSalary = 0;
      this.eGender = '';
    }
  }

}
