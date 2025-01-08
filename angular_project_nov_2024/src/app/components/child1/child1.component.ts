import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a'],
  outputs: ['carsEvent']
})
export class Child1Component {
  a: any;
  myName = 'Sachin Tendulkar';
  myAge = 45;
  cars = ['Tata', 'Honda', 'maruti'];

  carsEvent = new EventEmitter(); // create EventEmitter object
  sendDataToParent() {
    this.carsEvent.emit(this.cars); // using EventEmitter object emit the data
  }

  constructor(private httpClient: HttpClient) {
    console.log("Child constructor");

  }
  ngOnChanges(myChanges: SimpleChanges) { // n times
    console.log('Child ngOnChanges');
    console.log(myChanges);
  }
  ngOnInit() {
    console.log('Child ngOnInit'); // 1 time
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data)
    });
  }
  // ngDoCheck() {
  //   console.log('Child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child ngOnDestory');
  // }
}
