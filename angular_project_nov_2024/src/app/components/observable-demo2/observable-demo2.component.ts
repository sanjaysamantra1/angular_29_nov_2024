import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, forkJoin, from, interval, map, Observable, of, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    // this.fromDemo();
    // this.ofDemo();
    // this.intervalDemo();
    // this.rangeDemo()
    this.forkJoinDemo()
  }
  fromDemo() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Hundai'];
    let carsObservable = from(cars);
    carsObservable.subscribe(car => console.log(car));
  }
  ofDemo() {
    let carsObservable = of('Audi', 'BMW', 'Toyota');
    carsObservable.subscribe(car => console.log(car));
  }
  numbers: any;
  intervalDemo() {
    this.numbers = interval(1000);
    this.numbers.subscribe((val: any) => console.log(val));
  }
  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });

  rangeDemo() {
    let myObs = range(1, 10);
    // myObs.subscribe((val: any) => console.log(val));

    let even_nums = myObs.pipe(filter(ele => ele % 2 == 0));
    even_nums.subscribe((val: any) => console.log(val));

    let square = myObs.pipe(map(ele => ele * ele))
    square.subscribe((val: any) => console.log(val));

    let only_5 = myObs.pipe(take(5));
    only_5.subscribe((val: any) => console.log(val));
  }
  forkJoinDemo() {
    let userNames = ['sanjaysamantra1', 'TanojT', 'BalajiPavan'];

    let allObservables = userNames.map(userName => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`)
    });
    forkJoin(allObservables).subscribe(responses => {
      console.log(responses)
    })
  }
}

