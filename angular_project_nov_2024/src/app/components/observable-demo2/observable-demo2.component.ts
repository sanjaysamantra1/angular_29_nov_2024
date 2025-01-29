import { Component } from '@angular/core';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})

export class ObservableDemo2Component {

  constructor() { }

  ngOnInit() {
    // this.fromDemo();
    // this.ofDemo();
    this.intervalDemo()
  }

  fromDemo(){
    let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];
    let carsObservable = from(cars);
    carsObservable.subscribe(car => {
      console.log(car);
    });
  }

  ofDemo(){
    let carsObservable = of('Tata', 'Honda', 'Maruti', 'Hyundai');
    carsObservable.subscribe(car => {
      console.log(car);
    });
  }

  numbers: any;
  intervalDemo(){
    this.numbers = interval(1000);
    this.numbers.subscribe((val: any) => {
      console.log(val);
    });
  }

}
