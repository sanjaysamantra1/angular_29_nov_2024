import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-assignments",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./assignments.component.html",
  styleUrl: "./assignments.component.css",
})
export class AssignmentsComponent {
  dropDown = "";
  input1: any;
  input2: any;
  operation: string = "+";
  result: string | number = "";
  flag: boolean = false;
  inputText: boolean = false;
  counterResult: any;
  counter: number = 0;
 
  // Increment method
  increment() {
    this.counter++;
  }

  // Decrement method
  decrement() {
    this.counter--;
  }

  // Reset method
  reset() {
    this.counter = 0;
  }

  toggleInputType() {
    this.inputText = !this.inputText;
  }

  calculate(): void {
    if (isNaN(this.input1) || isNaN(this.input2)) {
      this.result = "Please enter valid numbers";
    } else {
      switch (this.operation) {
        case "+":
          this.result = this.input1 + this.input2;
          break;
        case "-":
          this.result = this.input1 - this.input2;
          break;
        case "*":
          this.result = this.input1 * this.input2;
          break;
        case "/":
          this.result =
            this.input2 !== 0
              ? this.input1 / this.input2
              : "Cannot divide by zero";
          break;
        default:
          this.result = "Invalid operation";
      }
    }
  }

  Reset(): void {}
}
