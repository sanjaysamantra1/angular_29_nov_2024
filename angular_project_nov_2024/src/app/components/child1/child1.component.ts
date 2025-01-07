import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['ab'],
  outputs: ['carsEvent']
})
export class Child1Component {

  ab: any;
  // a: any;
  myName = 'Sachin Tendulkar';
  myAge = 45;
  cars = ['Tata', 'Honda', 'maruti'];

  carsEvent = new EventEmitter(); // create a event emitter object

  sendDataToParent() {
    this.carsEvent.emit(this.cars); // using the created event emitter object emit the object
  }

}