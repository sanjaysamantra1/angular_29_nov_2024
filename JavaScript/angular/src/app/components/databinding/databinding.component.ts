import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  val = "Hi, Welcome To My Page";
  flag = false;
  isPass=false;
  textLength = 100;
  text = '';
  diff = this.textLength - this.text.length;
  selectedState = "Please Select The State";


  val1 = 0;
  val2 = 0;
  res = 0;

  operator = "+";


  calculate() {
    switch (this.operator) {
      case "+":
        this.res = this.val1 + this.val2;
        break;
      case "-":
        this.res = this.val1 - this.val2;
        break;
      case "*":
        this.res = this.val1 * this.val2;
        break;
      case "%":
        this.res = this.val1 % this.val2;
        break;
      default:
        this.res = 0;
    }
  }

  passwordValue = '';


  togglePasswordVisibility(){
    this.isPass=!this.isPass;
  }



  counter=0;

  counterr(action: string){
    if(action==='increment'){
      this.counter=this.counter+1;
    }
    else if(action==='decrement'){
      this.counter=this.counter-1;
    }
    else if(action==='reset'){
      this.counter=0;
    }
  }
}
