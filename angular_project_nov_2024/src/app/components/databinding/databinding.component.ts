import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [ // modules, directives, components, pipes
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  myName: string = 'Sachin Tendulkar';
  img_url: string = 'https://images-cricketcom.imgix.net/sachin-tendulkar-1693132548682?fit=crop&crop=face&auto=format&ixlib=react-9.8.0&h=250&w=180';
  flag: boolean = false;
  myWidth: string = '50%';
  myHeight: string = '200px';
  myAriaLabel: string = 'Button Label....';
  num1: number = 0;
  num2: number = 0;
  msg: string = '';
  selectedState: string = '';
  firstNumber: number = 0;
  secondNumber: number = 0;
  selectedOperation: string = 'add';
  operationResult: number = 0;
  inputType: string = 'password';
  counter: number = 0; // Counter value

  f1() {
    console.log('F1 called.....');
  }

  addition(n1: any, n2: any) {
    console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`);
  }

  performOperation() {
    switch (this.selectedOperation) {
      case 'add':
        this.operationResult = this.firstNumber + this.secondNumber;
        break;
      case 'subtract':
        this.operationResult = this.firstNumber - this.secondNumber;
        break;
      case 'multiply':
        this.operationResult = this.firstNumber * this.secondNumber;
        break;
      case 'divide':
        this.operationResult = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : 0;
        break;
      default:
        this.operationResult = 0;
    }
  }

  toggleInputType() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }

  // Counter Methods
  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}
