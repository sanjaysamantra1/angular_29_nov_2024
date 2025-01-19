import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  private mathServiceObj = inject(MathService); // another way to inject service

  constructor() {
  }

  ngOnInit() {
    console.log("I am math 2 component");
    console.log(`Mul of 10 & 20 is ${this.mathServiceObj.mul(10, 20)}`);
    console.log(`square of 10 & 20 is ${this.mathServiceObj.square(10)}`);
  }
}
