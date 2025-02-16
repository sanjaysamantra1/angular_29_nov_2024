import { createReducer, on } from "@ngrx/store";
import {
  addTodo,
  deleteTodo,
  loadTodos,
  toggleCompletion,
  toggleTodo,
  updateCounter,
} from "../actions/todo.actions";
import { Todo } from "../../models/todo";

export interface TodoState {
  todos: Todo[];
  todoCounter: number;
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "Learn Javascript",
      isCompleted: false,
      isFavorite: false,
      date: Date.now(),
    },
  ],
  todoCounter: 2,
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state })),
  on(deleteTodo, (state) => ({ ...state, todo: state.todos })),
  on(toggleTodo, (state) => ({ ...state, todo: state.todos })),
  on(updateCounter, (state) => ({
    ...state,
    todoCounter: state.todoCounter + 1,
  })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(toggleCompletion, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ),
  }))
);
