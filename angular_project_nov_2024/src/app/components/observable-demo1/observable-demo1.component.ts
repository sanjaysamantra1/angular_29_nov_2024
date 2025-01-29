import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  constructor() { }

  ngOnInit() {
    let carsObservable = new Observable((observer) => {     // publisher
      observer.next('Tata');
      observer.next('Honda');
      observer.next('Maruti');
      observer.next('Hyundai');
      observer.complete();
    });

    carsObservable.subscribe({                 // subscriber
      next: (val => {
      console.log('next called', val);
      }),
      error: (err => {
        console.log('error called', err);
      }), 
      complete: () => {
        console.log('all data received');
      }
    }); 
  }
}
