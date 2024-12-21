import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


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
  flag: boolean = true;
  isPassword: boolean = true;
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

  result: string | number = '';

  calculate(num1: string, num2: string, operator: string): void {
    const number1 = parseFloat(num1); 
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      this.result = 'Please enter valid numbers.';
      return;
    }

    switch (operator) {
      case '+':
        this.result = number1 + number2;
        break;
      case '-':
        this.result = number1 - number2;
        break;
      case '*':
        this.result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          this.result = 'Division by zero is not allowed.';
        } else {
          this.result = number1 / number2;
        }
        break;
      default:
        this.result = 'Invalid operator selected.';
    }
  }

  count: number = 0;


  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Management' },
    { id: 3, name: 'Mike Johnson', position: 'UI/UX Designer', department: 'Design' },
    { id: 4, name: 'Alice Brown', position: 'QA Engineer', department: 'Quality Assurance' },
  ];
}
