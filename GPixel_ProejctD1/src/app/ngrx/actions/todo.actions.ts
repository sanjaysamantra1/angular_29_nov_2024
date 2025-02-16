import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo";

export const loadTodos = createAction("[Todo] Load Todos");
export const addTodo = createAction("Add Todo", props<{ todo: Todo }>());
export const toggleCompletion = createAction(
  "[Todo] Toggle Completion",
  props<{ id: number }>()
);
export const deleteTodo = createAction("Delete Todo", props<{ id: number }>());
export const toggleTodo = createAction("Toggle Todo", props<{ id: number }>());
export const updateCounter = createAction("[Todo] Update Counter");
