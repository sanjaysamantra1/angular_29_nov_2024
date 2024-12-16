import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule]
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
  msg: string = '';
  selectedState: string = '';


  f1() {
    console.log('F1 called.....')
  }
  addition(n1: any, n2: any) {
    console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`)
  }
  // Calculator properties
  calc = {
    num1: 0,
    num2: 0,
    operator: '+',
    result: 0
  };

  // Password toggle properties
  password: string = '';
  showPassword: boolean = false;

  // Counter properties
  counter = {
    value: 0,
    increment: () => this.counter.value++,
    decrement: () => this.counter.value--,
    reset: () => this.counter.value = 0
  };

  calculate() {
    switch(this.calc.operator) {
      case '+':
        this.calc.result = this.calc.num1 + this.calc.num2;
        break;
      case '-':
        this.calc.result = this.calc.num1 - this.calc.num2;
        break;
      case '*':
        this.calc.result = this.calc.num1 * this.calc.num2;
        break;
      case '/':
        this.calc.result = this.calc.num2 !== 0 ? this.calc.num1 / this.calc.num2 : 0;
        break;
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}