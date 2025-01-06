import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  flag: boolean = false;
  myWidth = '50%';
  myHeight = '200px';
  myAriaLabel = 'Button Label....';
  num1 = 0;
  num2 = 0;
  msg: string = '';
  selectedState: string = '';
  operator: string = '';
  flag1: boolean = false;
  text : string = 'text';
  counter : number = 0;


  f1() {
    console.log('F1 called.....')
  }
  addition(num1: any, num2: any) {
    console.log(`Addition of ${num1} and ${num2} is ${+num1 + +num2}`)
  }

  calculation(num1: any, num2: any, operator: string) {
    switch(operator) {
      case '+':
        return +num1 + +num2;
      case "-":
        return +num1 - +num2;
      case "*":
        return +num1 * +num2;
      case "/":
        return +num1 / +num2;
      case "%":
        return +num1 % +num2
      }
    return null;
  }

  clickEvent() {
    this.flag1 = !this.flag1;
    console.log(this.flag1);
    this.flag1 ? this.text= "password" : this.text = "text";
  }


}