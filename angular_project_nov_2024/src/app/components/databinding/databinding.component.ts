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
  myName: string = 'Vijay Devarkonda';
  myName1: string= 'Vijay sai Devarkonda';
  myName2: string= 'Arjun Reddy';
  img_url: string = 'data:image/jpeg;base64,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';
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
