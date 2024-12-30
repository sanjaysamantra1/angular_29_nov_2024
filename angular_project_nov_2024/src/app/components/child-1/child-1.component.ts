import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-1',
  imports: [],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css',
  inputs: ['emps'],
  outputs: ['deleteEvent']
})
export class Child1Component {
emps:any;

deleteEvent = new EventEmitter();

deleteEmp(emp: any){
this.deleteEvent.emit(emp);
}
}
