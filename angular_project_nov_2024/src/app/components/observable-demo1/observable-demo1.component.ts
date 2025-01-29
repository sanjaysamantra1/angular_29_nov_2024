import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  ngOnInit() {
    let carsObservable = new Observable((observer) => { // publisher
      observer.next('Tata');
      observer.next('Honda');
      observer.next('Maruti');
      observer.next('Hundai');
      observer.complete();
    });
    carsObservable.subscribe({
      next: (val => {
        console.log('next called', val)
      }),
      error: (err => {
        console.log(err)
      }),
      complete: () => {
        console.log('all data received')
      }
    });
  }

}
