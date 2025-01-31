import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementAction, incrementAction, resetAction } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<any>) {
    this.count$ = store.select('count'); // selector
    console.log(this.count$)
  }

  increment() {
    this.store.dispatch(incrementAction());
  }
  decrement() {
    this.store.dispatch(decrementAction());
  }
  reset() {
    this.store.dispatch(resetAction());
  }
}
