import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-2',
  imports: [FormsModule],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css',
  outputs: ['empevent']
})
export class Child2Component {

empevent: any = new EventEmitter();

emp:any;

  addNewEmp(a:any, b:any,c:any,d:any){
    this.emp = { eId: a, name: b, sal: c, gender: d }
    this.empevent.emit(this.emp);
  }
}
