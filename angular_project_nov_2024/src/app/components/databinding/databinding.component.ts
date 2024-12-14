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
  myName: string = 'King Kohli';
  myName1: string= 'King King';
  myName2: string= 'Virat';
  img_url: string = 'https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds';   flag: boolean = false;
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
  operationResult: any = 0;
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
        if(this.secondNumber==0){
          this.operationResult = 'Does not exist';
        }
        else{
        this.operationResult = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : 0;
        }
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