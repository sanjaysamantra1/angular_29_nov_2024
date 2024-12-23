import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-employee-list',
    imports: [],
    templateUrl: './employee-list.component.html',
    styleUrl: './employee-list.component.css',
    inputs: ['employees', 'selectedEmployee'],
    outputs: ['deleteEvent', 'showEmployeeDetailsEvent'],
})
export class EmployeeListComponent {
    employees: any;
    selectedEmployee: any;
    deleteEvent = new EventEmitter(); // Create a event emitter object.
    deleteEmployee(employeeId: number) {
        this.deleteEvent.emit(employeeId); // Using event emitter object emit the data.
    }

    showEmployeeDetailsEvent = new EventEmitter();
    showEmployeeDetails(employee: any) {
        this.showEmployeeDetailsEvent.emit(employee);
    }
}
