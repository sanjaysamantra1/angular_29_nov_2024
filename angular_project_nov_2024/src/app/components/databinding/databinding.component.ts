import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { text } from '@fortawesome/fontawesome-svg-core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule,
    OrdinalPipe,
    AgePipe,
    SalutationPipe
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
  msg1 : string = '';
  selectedState: string = '';
  selectedOperator: string = '';
  flag1: boolean = false;
  mode: string = 'text';
  counterValue : number = 0;
  mode1: string = 'text';
  cardinalNumber : any;
  dob: any;

  modeChange(){
    this.flag = !this.flag;
    this.flag ? this.mode1 = 'password' : this.mode1 = 'text' 
  }

  f1() {
    console.log('F1 called.....');
    this.myName = "vamsi";
  }

  ass1(){
    if(this.flag1==false)
      return 
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

  employees = [
    {
        "eId": 1,
        "name": "dheeraj",
        "sal": 300000,
        "gender": "male"
    },
    {
        "eId": 2,
        "name": "maddula",
        "sal": 200000,
        "gender": "male"
    },
    {
        "eId": 3,
        "name": "sridhar",
        "sal": 150000,
        "gender": "male"
    },
    {
        "eId": 4,
        "name": "vijaya",
        "sal": 125000,
        "gender": "female"
    },
    {
        "eId": 5,
        "name": "lakshmi",
        "sal": 100000,
        "gender": "female"
    }
]
}
