import { createAction, props } from '@ngrx/store';
import { Employee } from '../../models/employee';

export const fetchEmployees = createAction('[EmployeeList Page] Fetch Employees');

export const fetchEmployeesSucess = createAction(
    '[Employees API] Employees Loaded Successfully',
    props<{ payload: Employee[] }>()
);
export const fetchEmployeesError = createAction('[Employees API] Employees Loaded Error');
export const deleteEmployee = createAction(
    '[Employees API] Delete Employee',
    props<{ id: string }>()
);
export const addEmployee = createAction(
    '[Employees API] Add Employee',
    props<{ employee: Employee }>()
);