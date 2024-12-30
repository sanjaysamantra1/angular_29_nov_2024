import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs:['a','name'], // incoming varibale form parent and we are collect it 
  outputs:['carsEvent']
})
export class Child1Component {

  a:any;
  name:any;
  myName = 'Rohith Rudrapati'
  cars=['Tata','Hundai','Formula1']

  carsEvent = new EventEmitter(); // create event emitter object

  sendDataToParent(){
    this.carsEvent.emit(this.cars);  // using event emmite robject emmit the data
  }
}
