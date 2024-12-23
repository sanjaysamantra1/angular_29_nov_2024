import { Component } from '@angular/core';
import * as data from './employees.json';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
    selector: 'app-employee',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AddEmployeeComponent,
        EmployeeListComponent,
    ],
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

    addEmployee(employee: any) {
        console.warn(this.employee.value);
        let newEmployee = {
            address: {
                geolocation: {
                    lat: '-37.3159',
                    long: '81.1496',
                },
                city: this.employee.value.city,
                street: this.employee.value.street,
                number: this.employee.value.houseNumber,
                zipcode: this.employee.value.zip,
            },
            id: this.incrementEmployeeId++,
            email: this.employee.value.email,
            username: this.employee.value.username,
            password: this.employee.value.password,
            name: {
                firstname: this.employee.value.firstName,
                lastname: this.employee.value.lastName,
            },
            phone: this.employee.value.phone,
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
