import { Component } from '@angular/core';
import * as data from './employees.json';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-employee',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css',
})
export class EmployeeComponent {
    employees = (data as any).default;
    selectedEmployee = this.employees[0];
    showModal: boolean = false;
    incrementEmployeeId: number = 1110;

    deleteEmployee(employeeId: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                this.employees.splice(
                    this.employees.findIndex(
                        (employee: any) => employee['id'] === employeeId
                    ),
                    1
                );
                Swal.fire({
                    title: 'Employee Deleted!',
                    text: 'Employee details have been deleted.',
                    icon: 'success',
                });
            }
        });
    }

    showEmployeeDetails(employee: any) {
        this.selectedEmployee = employee;
        console.log(this.selectedEmployee);
    }

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

    onSubmit() {
        console.warn(this.employeeForm.value);
        let newEmployee = {
            address: {
                geolocation: {
                    lat: '-37.3159',
                    long: '81.1496',
                },
                city: this.employeeForm.value.city,
                street: this.employeeForm.value.street,
                number: this.employeeForm.value.houseNumber,
                zipcode: this.employeeForm.value.zip,
            },
            id: this.incrementEmployeeId++,
            email: this.employeeForm.value.email,
            username: this.employeeForm.value.username,
            password: this.employeeForm.value.password,
            name: {
                firstname: this.employeeForm.value.firstName,
                lastname: this.employeeForm.value.lastName,
            },
            phone: this.employeeForm.value.phone,
            __v: 0,
        };
        this.employees.push(newEmployee);
        Swal.fire({
            title: 'Employee Added Successfully!',
            text: 'Employee details have been added.',
            icon: 'success',
        });
    }
}
