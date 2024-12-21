import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';
  img_url : string = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7-Wsjh7aHoB2aSKaOXt7OJ6xtSS_nWmhcETP2OXcYr7M5jqeQX5yqVYdHMXrpgNSWSpUEuMjITl9WxPSfKJtkAw';
  flag: boolean = false;
  myWidth = '50%';
  myHeight = '200px';
  myAriaLabel = 'Button Label....';
  num1 = 0;
  num2 = 0;
  msg: string = '';
  selectedState: string = '';

  f1(){
    console.log('F1 Called....')
  }
  addition(n1: any, n2: any) {
    console.log(`Addition of ${n1} and ${n2} is ${+n1 + +n2}`)
  }

}
