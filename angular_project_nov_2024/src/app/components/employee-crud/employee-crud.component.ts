import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteEmployee, fetchEmployees } from '../../ngrx/actions/employee.actions';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  employees: any = [];

  constructor(private store: Store<{ employees: Employee[] }>) {
    this.store.subscribe(data=>{
      console.log(data);
      this.employees = data.employees;
    })
  }
  ngOnInit() {
    this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    // this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: any) {
    this.store.dispatch(deleteEmployee({id}));
  }
}
