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
//ASSIGNMENTEMPOLYES

employees = [
  { id: 1, name: 'GOPICHAND', position: 'Software Engineer', department: 'IT',imageUrl: 'https://imgs.search.brave.com/W-ECgx-WrBKB9Ix5R91GhS60bQpxmJwaO-FozxQKm-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NS8xOS8xMi8zOC9l/bnRyZXByZW5ldXIt/MjMyNjQxOV82NDAu/anBn'},
  { id: 2, name: 'SIVAKRISHNA', position: 'Manager', department: 'Management',imageUrl: 'https://imgs.search.brave.com/Vu96GmyZf4dSFfI4SPPwbmmaRfwNmau5NtY9PIkQOrc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NDg0MjYwMi9waG90/by9wb3J0cmFpdC1v/Zi1hLXlvdW5nLWJ1/c2luZXNzd29tYW4t/d29ya2luZy1vbi1h/LWxhcHRvcC1pbi1h/bi1vZmZpY2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWtm/UDFnMjcxMlJpYXhz/RHJpSXhGbzM2M0FS/bGFMMkQ1OTFzLTIy/Q25Jbzg9'},
  { id: 3, name: 'SRIMANTH', position: 'FRONTEND', department: 'Design',imageUrl: 'https://imgs.search.brave.com/fVTUaYiLiZ6271yOQ9pxtSV6Ns8lTfB9JRD7rJy34E8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXNpbmVzc21h/bi13aXRoLWhpcy1s/YXB0b3AtaGlzLWNv/bGxlYWd1ZXNfMTMz/MzktMTMzNzE0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ'},
  { id: 4, name: 'ANIL', position: 'THAGUBOTHU', department: 'Artist', imageUrl: 'https://imgs.search.brave.com/8luIhEz-kavzlBZbWamifLfDh4gq1vn3LBxcfTCBu1I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWlsaW5nLWJ1/c2luZXNzbWFuLXN0/YW5kaW5nLW9mZmlj/ZV8xMDc0MjAtNzY3/NDIuanBnP3NlbXQ9/YWlzX2h5YnJpZA'},
  { id: 5, name: 'hari', position: 'THirugubothu', department: 'show off', imageUrl: 'https://imgs.search.brave.com/8luIhEz-kavzlBZbWamifLfDh4gq1vn3LBxcfTCBu1I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWlsaW5nLWJ1/c2luZXNzbWFuLXN0/YW5kaW5nLW9mZmlj/ZV8xMDc0MjAtNzY3/NDIuanBnP3NlbXQ9/YWlzX2h5YnJpZA'},

  ];
}
