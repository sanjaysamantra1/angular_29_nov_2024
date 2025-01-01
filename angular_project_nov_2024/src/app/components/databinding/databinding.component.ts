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
  selectedOperation : string = "+";
  password: string= "text";
  countter : number = 0;
  changeType=()=>{
    this.flag= ! this.flag;
    if(this.flag){
      this.password = "password"
    }
    else{
      this.password = "text" 
    }
  }


  f1() {
    console.log('F1 called.....')
  }
  addition(n1: any, n2: any) {
    console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`)
  }
result : number =0;
  /*operationsNeedToDo($event : any, nu1:any, nu2: any){
    switch (this.selectedOperation){
      case '+':
        this.result = +nu1+parseInt(nu2);
        break;
      case '-':
        this.result = nu1-nu2;
        break;
      case '/':
        this.result = nu1/nu2;
        break;
      case '*':
        this.result = nu1*nu2;
        break;
      case '%':
        this.result = nu1%nu2;
        break;
      default:
        console.log("*******************");
    }*/
    operationsNeedToDo($event : any){
      this.result = (eval(this.num1+this.selectedOperation+this.num2));
    }
    
  }



}


