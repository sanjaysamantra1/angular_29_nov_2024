import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {

  constructor(private mathServiceObj: MathService) { }

  ngOnInit() {
    console.log(`PI value is ${this.mathServiceObj.PI}`);
    console.log(`Addition of 10 & 20 is ${this.mathServiceObj.add(10, 20)}`);
    console.log(`sub of 10 & 20 is ${this.mathServiceObj.sub(10, 20)}`);

  }

}
