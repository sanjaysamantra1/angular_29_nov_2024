import { Component, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child1',
    imports: [],
    templateUrl: './child1.component.html',
    styleUrl: './child1.component.css',
    inputs: ['own'],
    outputs: ['carsEvent', 'cars'],
})
export class Child1Component {
    own: number = 0;
    myName: string = 'Pradeep Y';
    cars: string[] = ['maruthi', 'ford', 'toyota'];

    carsEvent = new EventEmitter(); // Create a event emitter object.
    sendDataToParent() {
        this.carsEvent.emit(this.cars); // Using event emitter object emit the data.
    }
}
