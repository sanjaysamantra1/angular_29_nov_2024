import { Component } from '@angular/core';
import * as data from './employees.json';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-employee',
    imports: [FormsModule],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css',
})
export class EmployeeComponent {
    employees = (data as any).default;
    selectedEmployee = this.employees[0];
    showModal: boolean = false;

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

    addEmployee(){
        this.employees.push()
    }

}
