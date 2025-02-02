import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo, toggleTodo } from '../actions/todo.actions';

export const initialState = [
    { id: 1, text: 'Learn javascript', isCompleted: true },
    { id: 2, text: 'Go to Gym', isCompleted: false },
    { id: 3, text: 'Buy Grocery', isCompleted: false },
];
export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, action: any) => {
        return [...state, action.payload]
    }),
    on(deleteTodo, (state, action: any) => {
        return state.filter(todo => todo.id != action.id);
    }),
    on(toggleTodo, (state, action: any) => {
        return state.map((todo) => {
            return todo.id !== action.id
                ? todo
                : { ...todo, isCompleted: !todo.isCompleted }
        });
    })
);