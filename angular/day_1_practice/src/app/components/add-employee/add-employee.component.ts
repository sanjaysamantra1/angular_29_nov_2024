import { Component, EventEmitter } from '@angular/core';
import {
    FormGroup,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-add-employee',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './add-employee.component.html',
    styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
    employeeForm = new FormGroup({
        email: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        phone: new FormControl(''),
        password: new FormControl(''),
        city: new FormControl(''),
        street: new FormControl(''),
        houseNumber: new FormControl(''),
        zip: new FormControl(''),
    });
    addEmployeeEvent = new EventEmitter(); // Create a event emitter object.
    onSubmit() {
        this.addEmployeeEvent.emit(); // Using event emitter object emit the data.
    }
}
