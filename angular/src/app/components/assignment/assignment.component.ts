import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class DatabindingComponent {

  // Assignment 1
  showText = true;

  // Assignment 2
  inputText = '';
  maxTextLength = 100;

  // Assignment 3
  selectedState = '';

  // Assignment 4
  number1 = 0;
  number2 = 0;
  operator = '+';
  result = 0;

  calculate() {
    this.result = 
      this.operator === '+' ? this.number1 + this.number2 :
      this.operator === '-' ? this.number1 - this.number2 :
      this.operator === '*' ? this.number1 * this.number2 :
      this.operator === '/' && this.number2 !== 0 ? this.number1 / this.number2 :
      0;
  }

  // Assignment 5
  passwordVisible = false;

  // Assignment 6
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 0;
  }

}
