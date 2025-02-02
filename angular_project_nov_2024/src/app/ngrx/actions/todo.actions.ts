import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const addTodo = createAction('Add Todo', props<{ payload: Todo }>());
export const deleteTodo = createAction('Delete Todo', props<{ id: number }>());
export const toggleTodo = createAction('Toggle Todo', props<{ id: number }>());