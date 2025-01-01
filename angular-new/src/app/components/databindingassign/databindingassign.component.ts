import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databindingassign',
  imports: [
    FormsModule
  ],
  templateUrl: './databindingassign.component.html',
  styleUrl: './databindingassign.component.css'
})
export class DatabindingassignComponent {
  flag: boolean = false;
  val = "Hello, This is my Angular Page";

  textLength = 100;
  text = '';
  
  State = '';  

  val1 = 0;
  val2 = 0;
  res = 0;

  operator = "+";

  calculate() {
    switch (this.operator) {
      case "+":
        this.res = this.val1 + this.val2;
        break;
      case "-":
        this.res = this.val1 - this.val2;
        break;
      case "*":
        this.res = this.val1 * this.val2;
        break;
      case "%":
        this.res = this.val1 % this.val2;
        break;
      default:
        this.res = 0;
    }
  }

isPassword = false;

counter=0;

counterr(action: string){
  if(action==='increment'){
    this.counter=this.counter+1;
  }
  else if(action==='decrement'){
    this.counter=this.counter-1;
  }
  else if(action==='reset'){
    this.counter=0;
  }
}
}
