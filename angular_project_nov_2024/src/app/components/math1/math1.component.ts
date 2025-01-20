import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(public mathObj:MathService){
    
    console.log(mathObj.PI);

  }
  ngOnInit(){
    console.log(`PI value is ${this.mathObj.PI}`);
    console.log(`Addition of 10 and 20 is ${this.mathObj.add(10,20)}`);
  }

}
