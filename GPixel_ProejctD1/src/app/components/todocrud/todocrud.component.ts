import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "../../models/todo";
import { Observable, tap } from "rxjs";
import { CommonModule } from "@angular/common";
import {
  addTodo,
  toggleCompletion,
  updateCounter,
} from "../../ngrx/actions/todo.actions";

@Component({
  selector: "app-todocrud",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todocrud.component.html",
  styleUrl: "./todocrud.component.css",
})
export class TodoCrudComponent implements OnInit {
  todos$: Observable<any> | undefined;
  todoCounter$!: Observable<number>;
  todoCounter: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(
      (state: any) => state.todoInitialState.todos
    );
    this.todos$.subscribe((response) => {
      console.log(response);
    });

    this.todoCounter$ = this.store.select(
      (state: any) => state.todoInitialState.todoCounter
    );
    this.todoCounter$.subscribe((count) => {
      this.todoCounter = count;
    });
  }

  addTodo(value: string) {
    if (!value.trim()) return;

    const newTodo: Todo = {
      id: this.todoCounter,
      title: value,
      isCompleted: false,
      isFavorite: false,
      date: Date.now(),
    };

    this.store.dispatch(addTodo({ todo: newTodo }));
    this.store.dispatch(updateCounter()); // Increment counter
  }

  deleteTodo(arg0: any) {
    throw new Error("Method not implemented.");
  }
  toggleFavorite(arg0: any) {
    throw new Error("Method not implemented.");
  }

  // deleteTodo(id: number) {
  //   this.store.dispatch(deleteTodo({ id }));
  // }

  toggleCompletion(id: number) {
    this.store.dispatch(toggleCompletion({ id }));
  }

  // toggleFavorite(id: number) {
  //   this.store.dispatch(toggleFavorite({ id }));
  // }
}
