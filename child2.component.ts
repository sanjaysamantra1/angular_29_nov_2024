import { Component,input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs : ['id','mobile','child2employees'],
  outputs: ['viewEmp','delEmp']
})
export class Child2Component {
  id:any;
mobile: any;
child2employees:any;

delEmp = new EventEmitter();

childDelEmployee(index:any){
  this.delEmp.emit(index);
}

viewEmp = new EventEmitter();

childViewEmployee(serialNo:any){
  this.viewEmp.emit(serialNo);
}


}
