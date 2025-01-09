import { Component } from '@angular/core';
import { MathService } from '../../services/service/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
 

  //  or we can do like this too but its not prefered as this created obj every time right
// constructor(){
//   let mathObj = new MathService();
// }

  // here mathservice is dependency injecion
  // as i kept private i cant use it in html
constructor(private mathService : MathService){
}

ngOnInit(){
  console.log(`PI Value is ${this.mathService.PI}`);
  console.log(`Addition of 30 and 40 is : ${this.mathService.add(30,40)}`);
  
}



}
