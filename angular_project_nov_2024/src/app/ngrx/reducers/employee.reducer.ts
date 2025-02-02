import { createReducer, on } from '@ngrx/store';
import { fetchEmployeesSucess } from '../actions/employee.actions';

export const initialState = [];
export const employeesReducer = createReducer(
    initialState,
    on(fetchEmployeesSucess, (state, action: any) => {
        return action.payload;
    }),
);