import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent {
  // Toggle paragraph visibility
  isVisible = false;
  message = "This is a toggleable paragraph.";

  // Character count
  userInput = '';
  maxCharacters = 100;

  // Dropdown for US states
  currentState = '';

  // Arithmetic operation
  number1 = 0;
  number2 = 0;
  mathOperator = '+';
  result = 0;

  performCalculation() {
    const num1 = Number(this.number1);
    const num2 = Number(this.number2);

    switch (this.mathOperator) {
      case '+':
        this.result = num1 + num2;
        break;
      case '-':
        this.result = num1 - num2;
        break;
      case '*':
        this.result = num1 * num2;
        break;
      case '%':
        this.result = num2 !== 0 ? num1 / num2 : NaN;
        break;
      default:
        this.result = NaN;
    }
  }

  // Toggle password input type
  isPasswordVisible = false;
  passwordInput = '';

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Counter functionality
  counterValue = 0;

  updateCounter(action: string) {
    switch (action) {
      case 'increase':
        this.counterValue++;
        break;
      case 'decrease':
        this.counterValue--;
        break;
      case 'reset':
        this.counterValue = 0;
        break;
    }
  }

  // Input field example
  enteredPhoneNumber = '';

  showPhoneNumber(phone: string) {
    this.enteredPhoneNumber = phone;
  }
}
