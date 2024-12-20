import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-databinding',
  imports: [ // modules , directives,components,pipes
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://images-cricketcom.imgix.net/sachin-tendulkar-1693132548682?fit=crop&crop=face&auto=format&ixlib=react-9.8.0&h=250&w=180'
  flag: boolean = false;
  myWidth = '50%';
  myHeight = '200px';
  myAriaLabel = 'Button Label....';
  num1 = 0;
  num2 = 0;
  val = "Hello, This is my Angular Page";
  textLength = 100;
  text = '';
  State = '';  
  msg: string = '';

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

f1() {
console.log('F1 called.....')
}
addition(n1: any, n2: any) {
console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`);
}


// function f1() {
//   throw new Error('Function not implemented.');
// }

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
