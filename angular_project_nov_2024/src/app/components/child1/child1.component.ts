import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['childA', 'childB'],
  outputs: ['carsEvent']
})
export class Child1Component {
  childA: any;
  childB: any;

  cars = ['Tata', 'Honda', 'maruti'];

  carsEvent = new EventEmitter(); // create a event emitter object

  sendDataToParent() {
    this.carsEvent.emit(this.cars); // using the created event emitter object emit the object
  }
}
