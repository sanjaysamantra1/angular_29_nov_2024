import { Component, EventEmitter } from '@angular/core';

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
}
