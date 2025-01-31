import { createAction } from '@ngrx/store';

export const incrementAction = createAction('[Counter Component] Increment');
export const decrementAction = createAction('[Counter Component] Decrement');
export const resetAction = createAction('[Counter Component] Reset');