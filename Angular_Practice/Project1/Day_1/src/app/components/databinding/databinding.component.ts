import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmployeeComponent } from "../employee/employee.component";

@Component({
  selector: 'app-databinding',
  imports: [FormsModule, EmployeeComponent],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
myName: string='Sachin';
img_url:string='https://images-cricketcom.imgix.net/sachin-tendulkar-1693132548682?fit=crop&crop=face&auto=format&ixlib=react-9.8.0&h=250&w=180';
img_loc:string='images/img_1.png';
flag:boolean= false;
myAriaLabel='Buttonn Label..';
myWidth='50%';
myHeight='200px';
num1 =0;
num2 =0;
selectedState:string="";
msg:string='';
selectedOperator:string="";
flag1:boolean=false;
text:string="text";
counterValue:number=0;
f1()
{
  console.log("F1 is called..")
}

addition(num1:any,num2:any)
{
  console.log(`Add of ${num1} and ${num2} is ${+num1 + +num2}`)
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
  this.flag1=!this.flag1;
  this.flag1?this.text="password":this.text="text"
}

}
