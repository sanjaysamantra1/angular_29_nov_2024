import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todo-crud.component.html',
  styleUrl: './todo-crud.component.css'
})
export class TodoCrudComponent {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoArr);
  }
}
