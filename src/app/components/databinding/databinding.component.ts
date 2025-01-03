import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-databinding',
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  // toggling a button
   isVisible = true;
   togglePara() {
     this.isVisible = !this.isVisible;
   }
   //text area
   text: string = '';
   maxLength: number = 100;
   remainingChars: number = this.maxLength;
 
   updateRemainingChars() {
     this.remainingChars = this.maxLength - this.text.length;
   }
 
   //dropdown
   states: string[] = ['California', 'Texas', 'New York', 'Florida', 'Illinois'];
   selectedState: string = '';
 
   onStateChange() {
     console.log('Selected State:', this.selectedState);
   }
 
   //calculate Functionality
   input1: number = 0;
   input2: number = 0;
   selectedOperation: string = '+';
   result: number = 0;
   operations: string[] = ['+', '-', '*', '/'];
 
   calculate() {
     switch (this.selectedOperation) {
       case '+':
         this.result = this.input1 + this.input2;
         break;
       case '-':
         this.result = this.input1 - this.input2;
         break;
       case '*':
         this.result = this.input1 * this.input2;
         break;
       case '/':
         this.result = this.input2 !== 0 ? this.input1 / this.input2 : NaN; // Prevent division by zero
         break;
       default:
         this.result = NaN;
     }
   }
 //toggle text password
 isPassword: boolean = true; // Initial type is 'password'
   inputValue: string = '';
 
   togglePasswordVisibility() {
     this.isPassword = !this.isPassword; // Toggle the boolean
   }
 
   //3 controls
   counter: number = 0;
   increment() {
     this.counter++;
   }
   decrement() {
     if (this.counter > 0) {
       this.counter--;
     }
   }
   reset() {
     this.counter = 0;
   }
 
 }