import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
  selectedOperator: string = '';
  flag1: boolean = false;
  mode: string = 'text';
  counterValue : number = 0;

  f1() {
    console.log('F1 called.....');
    this.myName = "vamsi";
  }

  addition(n1: any, n2: any) {
    console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`)
  }

  operations(n1: any, n2: any, opr: any) {
    switch(opr){
      case 'Add':
        return +n1 + +n2;
      case 'Sub':
        return +n1 - +n2;
      case 'Mul':
        return +n1 * +n2;
      case 'Div':
        return +n1 / +n2;
    }
    return null;
  }

  clickEvent(){
    this.flag1 = !this.flag1;
    this.flag1 ? this.mode='password' : this.mode='text';
  }
  
}
