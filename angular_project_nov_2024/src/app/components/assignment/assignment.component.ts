import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-assignment',
  imports: [ // modules , directives,components,pipes
    FormsModule
  ],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class DatabindingComponent {
  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://images-cricketcom.imgix.net/sachin-tendulkar-1693132548682?fit=crop&crop=face&auto=format&ixlib=react-9.8.0&h=250&w=180'
  flag: boolean = true;
  isPassword: boolean = true;
  myWidth = '50%';
  myHeight = '200px';
  myAriaLabel = 'Button Label....';
  num1 = 0;
  num2 = 0;
  
  // msg: string = '';
  // selectedState: string = '';


  // f1() {
  //   console.log('F1 called.....')
  // }
  // addition(n1: any, n2: any) {
  //   console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`)
  // }

  // result: string | number = '';

  // calculate(num1: string, num2: string, operator: string): void {
  //   const number1 = parseFloat(num1); 
  //   const number2 = parseFloat(num2);

  //   if (isNaN(number1) || isNaN(number2)) {
  //     this.result = 'Please enter valid numbers.';
  //     return;
  //   }

  //   switch (operator) {
  //     case '+':
  //       this.result = number1 + number2;
  //       break;
  //     case '-':
  //       this.result = number1 - number2;
  //       break;
  //     case '*':
  //       this.result = number1 * number2;
  //       break;
  //     case '/':
  //       if (number2 === 0) {
  //         this.result = 'Division by zero is not allowed.';
  //       } else {
  //         this.result = number1 / number2;
  //       }
  //       break;
  //     default:
  //       this.result = 'Invalid operator selected.';
  //   }
  // }

  // count: number = 0;


  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   if (this.count > 0) {
  //     this.count--;
  //   }
  // }

  // reset() {
  //   this.count = 0;
  // }
  val = "Hi, Welcome To My Page";
  // flag = false;
  isPass=false;
  textLength = 100;
  text = '';
  diff = this.textLength - this.text.length;
  selectedState = "Please Select The State";


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
  passwordValue = '';


  togglePasswordVisibility(){
    this.isPass=!this.isPass;
  }



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